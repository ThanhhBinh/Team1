import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/css/base.css";
import "./assets/css/style.css";
import "./assets/css/grid.css";
import "./assets/css/responsive.css";
import { Provider } from "react-redux";
import store from "../src/state/store";
import Home from "./scenes/home/home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ProductList from "./scenes/productList/ProductList";
import ProductDetail from "./scenes/productDetail/ProductDetail";
import Checkout from "./scenes/checkout/checkout";
import PaymentPaypel from "./scenes/checkout/PaymentPaypel";
import Confirmation from "./scenes/checkout/confirmation";
import CartMenu from "./scenes/global/CartMenu";
import Purchase from "./scenes/user/purchase";
import NotificationOrder from "./scenes/user/NotificationOrder";
import NotificationPromotion from "./scenes/user/NotificationsPromotion";
import NotificationWallet from "./scenes/user/NotificationWallet";
import NotificationShopee from "./scenes/user/NotificationsShopee";
import VoucherWallet from "./scenes/user/VouchersWallet";
import Profile from "./scenes/user/account/profile";
import Payment from "./scenes/user/account/payment";
import Address from "./scenes/user/account/address";
import Password from "./scenes/user/account/password";
import Notification from "./scenes/user/setting/notification";
import Privacy from "./scenes/user/setting/privacy";
import Flashsale from "./scenes/Flashsale";
import TopProduct from "./scenes/TopProduct";
import ShopeeTopickGloba from "./scenes/ShopeeTopickGloba";
import DailyDiscover from "./scenes/DailyDiscover";
import Categories from "./categories/categories";
import VnOnboarding from "./sell/VnOnboarding";
import VnOnboardingForm from "./sell/VnOnboardingForm";
import VnOnboardingForm1 from "./sell/VnOnboardingForm1";
import VnOnboardingForm2 from "./sell/VnOnboardingForm2";
import VnOnboardingForm3 from "./sell/VnOnboardingForm3";
import VnOnboardingForm4 from "./sell/VnOnboardingForm4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewProduct from "./sell/Product/NewProduct";
import Searchproduct from "./scenes/SearchProduct";
import Search from "./scenes/global/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "product",
                element: <ProductList />,
            },
            {
                path: "product/page/:pageNum",
                element: <ProductList />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "confirmation",
                element: <Confirmation />,
            },
            {
                path: "searchproduct",
                element: <Searchproduct />,
            },
            {
                path: "success",
                element: <Confirmation />,
            },
            {
                path: "cart",
                element: <CartMenu />,
            },
            {
                path: "purchase",
                element: <Purchase />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "address",
                element: <Address />,
            },
            {
                path: "password",
                element: <Password />,
            },
            {
                path: "notification",
                element: <Notification />,
            },
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "notificationOrder",
                element: <NotificationOrder />,
            },
            {
                path: "notificationPromotion",
                element: <NotificationPromotion />,
            },
            {
                path: "notificationWallet",
                element: <NotificationWallet />,
            },
            {
                path: "notificationShopee",
                element: <NotificationShopee />,
            },
            {
                path: "voucherWallet",
                element: <VoucherWallet />,
            },
            {
                path: "flashsale",
                element: <Flashsale />,
            },
            {
                path: "search",
                element: <Search />,
            },
            {
                path: "top-product",
                element: <TopProduct />,
            },
            {
                path: "daily_discover",
                element: <DailyDiscover />,
            },
            {
                path: "categories/:id",
                element: <Categories />,
            },
            {
                path: "vn-onboarding",
                element: <VnOnboarding />,
            },
            {
                path: "vn-onboarding/form",
                element: <VnOnboardingForm />,
            },
            {
                path: "vn-onboarding/form1",
                element: <VnOnboardingForm1 />,
            },
            {
                path: "vn-onboarding/form2",
                element: <VnOnboardingForm2 />,
            },
            {
                path: "vn-onboarding/form3",
                element: <VnOnboardingForm3 />,
            },
            {
                path: "vn-onboarding/form4",
                element: <VnOnboardingForm4 />,
            },
            {
                path: "/sell/product/new",
                element: <NewProduct />,
            },
            {
                path: "/Shopee-Topick-Globa",
                element: <ShopeeTopickGloba />,
            },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);
