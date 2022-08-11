// @packages
import "@testing-library/jest-dom";
import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

// @own
import { LIST_OF_PRODUCTS } from 'src/mocks/product';
import ProductList from 'src/components/ProductList';

describe('ProductList', () => {
  it('Should render a list of products', async () => {
    const container = render(
      <MockedProvider mocks={LIST_OF_PRODUCTS} addTypename={false}>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </MockedProvider>
    );

    await waitFor(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(container.getByText('Laptop')).toBeDefined();
  });
});
