// @packages
import { useQuery } from "@apollo/client";

// @app
import { Product } from 'src/types';
import LoadingSVG from 'src/assets/loading.svg';
import ErrorSVG from 'src/assets/error.svg';

// @own
import { GET_ALL_PRODUCTS } from 'src/graphql/queries';
import Card from 'src/components/Card';
import {
  LoadingContainer,
  LoadingImage,
  ProductsContainer,
} from './index.styled';

function ProductList() {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  const products: Product[] = data?.products?.items;

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingImage src={LoadingSVG} />
      </LoadingContainer>
    )
  };

  if (error) {
    return (
      <LoadingContainer>
        <LoadingImage src={ErrorSVG} />
      </LoadingContainer>
    )
  };

  return (
    <ProductsContainer>
      {products?.map((product) => {
        const {
          assets,
          id,
          name,
          slug,
          variants,
        } = product;
        return (
          <Card
            image={assets?.[0]?.source}
            key={id}
            name={name}
            price={variants?.[0]?.priceWithTax}
            slug={slug}
          />
        )
      })}
    </ProductsContainer>
  );
};

export default ProductList;
