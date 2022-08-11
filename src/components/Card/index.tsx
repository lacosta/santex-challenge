// @packages
import { useNavigate } from "react-router-dom";

// @app
import { currencyFormatter } from 'src/utils/currencyFormatter';

// @own
import {
  BlurImage,
  CardContainer,
  ImageContainer,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  StyledImage,
} from './index.styled';
import { CardProps } from 'src/types';

function Card({
  image,
  name,
  price,
  slug,
}: CardProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/product-detail/${slug}`);
  };

  return (
    <CardContainer onClick={handleNavigate}>
      <ImageContainer>
        <BlurImage src={image} />
        <StyledImage src={image} />
      </ImageContainer>
      <ProductInfoContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          {currencyFormatter.format(price)}
        </ProductPrice>
      </ProductInfoContainer>
    </CardContainer>
  );
};

export default Card;
