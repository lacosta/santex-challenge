// @packages
import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetProducts {
    products {
      items {
        description
        id
        name
        slug
        assets {
          source
        }
        variants {
          id
          name
          priceWithTax
          productId
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String) {
    product(slug: $slug) {
      name
      description
      assets {
        source
      }
      variants {
        id
        name
        priceWithTax
        stockLevel
      }
    }
  }
`;

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    totalWithTax
    lines {
      id
      quantity
      unitPrice
      linePrice
      featuredAsset {
        source
        preview
      }
      productVariant {
        productId
        name
      }
    }
  }
`;

export const GET_ORDER_PRODUCTS = gql`
  {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT},
`;