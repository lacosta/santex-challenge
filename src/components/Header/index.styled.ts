// @packages
import styled from 'styled-components';
import { ShoppingCart, Trash } from 'phosphor-react';

const StyledHeader = styled.header`
  background-color: var(--blue);
  padding: 20px 20px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
`

const HeaderImage = styled.img`
  alt: 'Santex Logo';
  cursor: pointer;
  height: 30px;
  width: 150px;
`;

const IconsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledShoppingCart = styled(ShoppingCart)`
  color: #fff;
  cursor: pointer;
  font-size: 30px;

  &:active {
    transform: scale(1.2);
  }
`;

const StyledTrash = styled(Trash)`
  color: #fff;
  cursor: pointer;
  font-size: 30px;

  &:active {
    transform: scale(1.2);
  }
`;

export {
  HeaderContainer,
  HeaderImage,
  IconsContainer,
  StyledHeader,
  StyledShoppingCart,
  StyledTrash,
};
