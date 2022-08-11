// @packages
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 350px;
  margin: 10px;
  overflow: hidden;
  width: 270px;

  &:hover {
    transform: scale(1.05);
    transition-duration: 150ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
  height: 100%;
  max-height: 240px;
  position: relative;
  width: 100%;
`;

const StyledImage = styled.img`
  display: block;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const BlurImage = styled.img`
  filter: blur(11px);
  height: 110%;
  left: -5%;
  opacity: 0.9;
  position: absolute;
  top: -5%;
  width: 110%;
  z-index: 0;
`;

const ProductInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  text-align: center;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-family: var(--Montserrat);
  padding: 10px 20px 0px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-family: var(--Palanquin);
  font-weight: bold;
`;

export {
  BlurImage,
  CardContainer,
  ImageContainer,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
  StyledImage,
};