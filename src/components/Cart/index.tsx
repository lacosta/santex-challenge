// @packages
import { useQuery } from "@apollo/client";
import { useContext } from 'react';

// @app
import EmptyCartSVG from 'src/assets/emptyCart.svg';
import LoadingSVG from 'src/assets/loading.svg';
import ErrorSVG from 'src/assets/error.svg';
import { currencyFormatter } from 'src/utils/currencyFormatter';
import { OrderContext } from 'src/context/OrderContext';

// @own
import { GET_ORDER_PRODUCTS } from 'src/graphql/queries';
import {
  BlurImage,
  CartContainer,
  CartItem,
  ImageContainer,
  LoadingContainer,
  LoadingImage,
  LoadingText,
  OrderContainer,
  ProductName,
  ProductQuantity,
  StyledImage,
  Total,
} from './index.styled';

function Cart() {
  const { data, loading, error } = useQuery(GET_ORDER_PRODUCTS);
  const hasData = data?.activeOrder?.lines.length > 0;
  const { total } = useContext(OrderContext);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingImage
          src={LoadingSVG}
          alt="Loading Cart image"
        />
      </LoadingContainer>
    );
  };

  if (error) {
    return (
      <LoadingContainer>
        <LoadingImage src={ErrorSVG} />
      </LoadingContainer>
    )
  };

  if (!hasData) {
    return (
      <LoadingContainer>
        <LoadingImage
          src={EmptyCartSVG}
          alt="Empty Cart image"
        />
        <LoadingText>
          Your cart is empty.
        </LoadingText>
      </LoadingContainer>
    );
  };

  return (
    <CartContainer>
      <OrderContainer>
      <Total>
        Total: <u>{currencyFormatter.format(Number(total))}</u>
      </Total>
      {data?.activeOrder?.lines?.map((product: any) => {
        return (
          <CartItem>
            <ImageContainer>
              <BlurImage src={product?.featuredAsset?.source} />
              <StyledImage src={product?.featuredAsset?.source} />
            </ImageContainer>
            <div>
              <ProductName>Product: {product?.productVariant?.name}</ProductName>
              <ProductQuantity>Quantity: {product?.quantity}</ProductQuantity>
            </div>
          </CartItem>
        )
      })}
      </OrderContainer>
    </CartContainer>
  );
};

export default Cart;
