import React, { Fragment } from "react";
import Products from "../../components/AllProducts/Products";
import Collections from "../../components/Collections/Collections";
import CountDown from "../../components/CountDown/CountDown";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";

const Home = () => {
  return (
    <Fragment>
      <Collections />
      <Products />
      <CountDown />
      <ProductsCarousel />
    </Fragment>
  );
};

export default Home;
