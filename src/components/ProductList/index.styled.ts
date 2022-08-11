// @packages
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 0;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  };

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  };
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const LoadingImage = styled.img`
  width: 500px;
  height: 500px;
`;