// @packages
import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// @own
import 'src/styles/index.css';
import reportWebVitals from './reportWebVitals';
import Router from 'src/routes/Router';
import { OrderProvider } from 'src/context/OrderContext';

const commerceLink = createHttpLink({
  uri: 'https://shrouded-wave-86340.herokuapp.com/shop-api',
  headers: {
    authorization: localStorage.getItem('Auth-Token')
      ? `Bearer ${localStorage.getItem('Auth-Token')}`
      : '',
  },
});

const userLink = createHttpLink({
  uri: 'https://json-placeholder-graphql.herokuapp.com/graphql',
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
      localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    afterwareLink,
    ApolloLink.split(
      (operation) => operation.getContext().service === 'user',
      userLink,
      commerceLink
    ),
  ]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <OrderProvider>
          <Router />
        </OrderProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
