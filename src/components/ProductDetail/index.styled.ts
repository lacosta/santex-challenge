// @packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;

  @media (min-width: 900px) {
    margin: 50px;
  };
`;

export const DetailContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px #D5D9D9 solid;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  text-align: center;

  @media (min-width: 900px) {
    align-items: initial;
    flex-direction: row;
    max-height: 500px;
    max-width: 1200px;
    text-align: left;
    margin: 0 50px 0;
  };
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 900px) {
    width: 40%;
  };
`;

export const InfoContainer = styled.div`
  width: 70%;
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

export const BlurImage = styled.img`
  filter: blur(11px);
  height: 110%;
  left: -5%;
  opacity: 0.7;
  position: absolute;
  top: -5%;
  width: 110%;
  z-index: 0;
`;

export const ProductName = styled.p`
  color: #333;
  font-family: var(--Montserrat);
  font-size: 2rem;
  padding: 10px 20px 0px;
`;

export const ProductDescription = styled.p`
  color: #333;
  font-family: var(--Montserrat);
  font-size: 1rem;
  padding: 10px 0;

  @media (min-width: 900px) {
    padding: 10px 20px 0px;
    font-size: 1.2rem;
  };
`;

export const ProductVariantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    margin: 0;
    justify-content: flex-start;
  };
`;

export const ProductVariantsButton = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 2px solid black;
  cursor: pointer;
  font-family: var(--Montserrat);
  font-weight: bold;
  margin: 0.5rem;
  max-width: 200px;
  max-width: 200pxz;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;

export const ProductVariantsItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductVariantsPrice = styled.div`
  color: var(--blue);
  font-family: var(--Montserrat);
  font-weight: bold;
  margin: 0 0.5rem;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LoadingImage = styled.img`
  height: 500px;
  width: 500px;
`;

export const BackLink = styled(Link)`
  color: var(--blue);
  font-family: var(--Montserrat);
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
  text-transform: uppercase;
`;