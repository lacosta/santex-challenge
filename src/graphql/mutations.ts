// @packages
import { gql } from '@apollo/client';

// @own
import { ORDER_FRAGMENT } from 'src/graphql/queries';

export const ADD_ITEM_TO_ORDER = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT},
`;

export const CLEAN_ITEMS_ORDER = gql`
  mutation RemoveAllOrderLines {
    removeAllOrderLines {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT},
`;