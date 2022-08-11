// @packages
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';

// @app
import { getSlugFromURL } from 'src/utils/getSlug';
import { currencyFormatter } from 'src/utils/currencyFormatter';
import LoadingSVG from 'src/assets/loading.svg';
import ErrorSVG from 'src/assets/error.svg';
import { OrderContext } from 'src/context/OrderContext';

// @own
import { GET_PRODUCT_BY_SLUG } from 'src/graphql/queries';
import { ADD_ITEM_TO_ORDER } from 'src/graphql/mutations';
import {
  BackLink,
  BlurImage,
  Container,
  DetailContainer,
  ImageContainer,
  InfoContainer,
  LoadingContainer,
  LoadingImage,
  ProductDescription,
  ProductName,
  ProductVariantsButton,
  ProductVariantsContainer,
  ProductVariantsItem,
  ProductVariantsPrice,
  StyledImage,
} from './index.styled';

function ProductDetail() {
  const { setTotal } = useContext(OrderContext);
  const location = useLocation();
  const slug = getSlugFromURL(location?.pathname);
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: {
      slug: slug,
    }
  });

  const [AddItemToOrder] = useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted: (data) => {
      setTotal(data?.addItemToOrder?.totalWithTax);
      toast.success('🥳 Product added successfully.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  const handleAddItemToOrder = (productVariantId: number) => {
    AddItemToOrder({
      variables: {
        productVariantId: productVariantId,
        quantity: 1,
      }
    });
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingImage
          src={LoadingSVG}
          alt="Loading data image"
        />
      </LoadingContainer>
    );
  };

  if (error) {
    return (
      <LoadingContainer>
        <LoadingImage src={ErrorSVG} alt="error image" />
      </LoadingContainer>
    );
  };

  return (
    <Container>
      <DetailContainer>
        <ImageContainer>
          <BlurImage src={data?.product?.assets?.[0]?.source} alt="blur image" />
          <StyledImage src={data?.product?.assets?.[0]?.source} alt="product image" />
        </ImageContainer>
        <InfoContainer>
          <ProductName>{data?.product?.name}</ProductName>
          <ProductDescription>{data?.product?.description}</ProductDescription>
          <ProductVariantsContainer>
            {data?.product?.variants?.map((variant: any) => {
              return (
                <ProductVariantsItem key={variant?.id}>
                  <ProductVariantsButton onClick={() => handleAddItemToOrder(variant?.id)}>
                    {variant?.name}
                  </ProductVariantsButton>
                  <ProductVariantsPrice>
                    {currencyFormatter.format(variant?.priceWithTax)}
                  </ProductVariantsPrice>
                </ProductVariantsItem>
              )
            })}
          </ProductVariantsContainer>
        </InfoContainer>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
      </DetailContainer>
      <BackLink to="/">
        Go back
      </BackLink>
    </Container>
  );
};

export default ProductDetail;
