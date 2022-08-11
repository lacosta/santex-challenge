// @packages
import { Route, Routes } from "react-router-dom";

// @own
import App from 'src/components/App';
import Order from "src/pages/Order";
import ProductDetail from "src/pages/Product";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="product-detail/:slug" element={<ProductDetail />} />
      <Route path="order" element={<Order />} />
    </Routes>
  );
}

export default Router;
