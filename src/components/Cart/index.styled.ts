// @packages
import styled from 'styled-components';

export const CartContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  border: 1px #D5D9D9 solid;
  border-radius: 8px;
  overflow: hidden;
`;

export const OrderContainer = styled.div`
  border-radius: 8px;
  height: 100%;
  margin: 50px 20px;
  max-width: 1200px;
  overflow: hidden;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const LoadingImage = styled.img`
  height: 500px;
  width: 500px;
`;

export const LoadingText = styled.p`
  font-size: 28px;
  font-family: var(--Montserrat);
`;

export const ImageContainer = styled.div`
  border-bottom: 1px solid #ebebeb;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 200px;
`;

export const BlurImage = styled.img`
  filter: blur(11px);
  height: 110%;
  left: -5%;
  opacity: 0.9;
  position: absolute;
  top: -5%;
  width: 110%;
  z-index: 0;
`;

export const StyledImage = styled.img`
  display: block;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Total = styled.p`
  font-family: var(--Montserrat);
  font-size: 28px;
  text-align: right;
`;

export const ProductName = styled.p`
  font-family: var(--Montserrat);
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ProductQuantity = styled.p`
  font-family: var(--Montserrat);
`;
