import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import SideBarDashBoard from "./Components/SideBarDashBoard/SideBarDashBoard";
import NavBarDashBoard from "./Components/NavBarDashBoard/NavBarDashBoard";
import DashBoardUser from "./pages/DashBoardUser/DashBoardUser";
import DashBoardEdit from "./pages/DashBoardEdit/DashBoardEdit";
import DashBoardProducts from "./pages/DashBoardProducts/DashBoardProducts";
import DashBoardShipping from "./pages/DashBoardShipping/DashBoardShipping";
import DashBoardSettings from "./pages/DashBoardSettings/DashBoardSettings";
import Home from "./Components/Home/Home";
import FormLogin from "./Components/FormLogin/FormLogin";
import SignIn from "./Components/SignIn/SignIn";
import HomeEcommerce from "./Components/EcommerceCliente/HomeEcommerce";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ShoppingCartContainer from "./Components/EcommerceCliente/ShoppingCart/ShoppingCartContainer";

import Payment from "./Components/EcommerceCliente/ShoppingCart/Payment/Payment";
import PaymentSuccess from "./Components/EcommerceCliente/ShoppingCart/Payment/PaymentSuccess";
import PaymentCanceled from "./Components/EcommerceCliente/ShoppingCart/Payment/PaymentCanceled";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="d-flex w-100">
        {location.pathname === "/dashboard" && <SideBarDashBoard />}
        {location.pathname === "/dashboard/User" && <SideBarDashBoard />}
        {location.pathname === "/dashboard/Edit" && <SideBarDashBoard />}
        {location.pathname === "/dashboard/Products" && <SideBarDashBoard />}
        {location.pathname === "/dashboard/Shipping" && <SideBarDashBoard />}
        {location.pathname === "/dashboard/Settings" && <SideBarDashBoard />}

        <div className="d-flex flex-column">
          {location.pathname === "/dashboard" && <NavBarDashBoard />}
          {location.pathname === "/dashboard/User" && <NavBarDashBoard />}
          {location.pathname === "/dashboard/Edit" && <NavBarDashBoard />}
          {location.pathname === "/dashboard/Products" && <NavBarDashBoard />}
          {location.pathname === "/dashboard/Shipping" && <NavBarDashBoard />}
          {location.pathname === "/dashboard/Settings" && <NavBarDashBoard />}

          <Routes>
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
            <Route path="/paymentCanceled" element={<PaymentCanceled />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<Home />} /> {/* LadingPage */}
            <Route path="/login" element={<FormLogin />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/User" element={<DashBoardUser />} />
            <Route path="/dashboard/Edit" element={<DashBoardEdit />} />
            <Route path="/dashboard/Products" element={<DashBoardProducts />} />
            <Route path="/dashboard/Shipping" element={<DashBoardShipping />} />
            <Route path="/dashboard/Settings" element={<DashBoardSettings />} />
            <Route path="/homecliente" element={<HomeEcommerce />} />
            <Route path="/:domain" element={<HomeEcommerce />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCartContainer />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
