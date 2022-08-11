// @own
import Header from 'src/components/Header';
import { LayoutContainer } from './index.styled';

interface LayoutProps {
  children: JSX.Element,
};

function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout;