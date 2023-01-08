import React from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Disclaimer from "./DisclaimerComponent";
import FAQ from "./FaqComponent";
import Grievance from "./GrievanceComponent";
import Payment from "./PaymentComponent";
import Privacy from "./PrivacyComponent";
import Quality from "./QualityComponent";
import Vision from "./VisionComponent";
import LoginHeader from "./LoginHeaderComponent";
import FrequentlyAsked from "./FrequentlyAskedComponent";
import { Route, Routes } from "react-router-dom";
import OrderList from "./MyOrderComponent";
import Cart from "./CartComponent";
import CardSlider from "./CardSliderComponent";
import ProductDetails from "./ProductDetailComponent";
// import CategoryNav from './ProductCategoryNavComponent';
// import CategoryProducts from './CategoryProductsComponent';
import OrderDetails from "./OrderDetailsComponent";
import Shop from "../pages/Shop";
import toast, { Toaster } from 'react-hot-toast';
// import { integerPropType } from '@mui/utils';

class Main extends React.Component {
  render() {
    return (
      <>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/LoginHeader" element={<LoginHeader />} />
          <Route path="/frequently-asked" element={<FrequentlyAsked />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/cart-list" element={<Cart />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/sproducts" element={<ProductDetails />} />
          <Route path="/card-slider" element={<CardSlider />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        {/* <Footer/> */}
      </>
    );
  }
}

export default Main;
