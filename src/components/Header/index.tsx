// @packages
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from "@apollo/client";

// @app
import { OrderContext } from 'src/context/OrderContext';

// @own
import {
  HeaderContainer,
  HeaderImage,
  IconsContainer,
  StyledHeader,
  StyledShoppingCart,
  StyledTrash,
} from './index.styled';
import SantexLogo from 'src/assets/santex.png';
import { CLEAN_ITEMS_ORDER } from 'src/graphql/mutations';

function Header() {
  const { setTotal } = useContext(OrderContext);

  const [RemoveAllOrderLines] = useMutation(CLEAN_ITEMS_ORDER, {
    onCompleted: (data) => {
      setTotal(data?.removeAllOrderLines?.totalWithTax);
      toast.success(
        '🥳 Elements removed successfully.', {
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          position: "top-right",
          progress: undefined,
        }
      )
    }
  });

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link to="/">
          <HeaderImage src={SantexLogo} />
        </Link>
        <IconsContainer>
          <Link to="/order">
            <StyledShoppingCart />
          </Link>
          <StyledTrash onClick={() => RemoveAllOrderLines()} />
        </IconsContainer>
      </HeaderContainer>
      <ToastContainer
        autoClose={2000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        position="top-right"
        rtl={false}
      />
    </StyledHeader>
  );
}

export default Header;
