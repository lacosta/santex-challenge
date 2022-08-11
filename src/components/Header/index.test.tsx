// @packages
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from "react-router-dom";

// @own
import Header from './index';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MockedProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </MockedProvider>
    );

    expect(container).toBeInTheDocument();
  });
})