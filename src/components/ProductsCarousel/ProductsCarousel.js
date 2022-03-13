import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import { CubeSpinner } from "react-spinners-kit";

import "./ProductsCarousel.css";

const ProductsCarousel = () => {
  const { products, isLoading, isFailed } = useSelector(
    (state) => state.productsReducer
  );

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: windowSize >= 998 ? 3 : windowSize >= 625 ? 2 : 1,
    speed: 500,
  };

  return (
    <div className="products__carousel">
      <div className="container">
        {!isLoading ? (
          isFailed ? (
            <div className="error">
              <i className="fa fa-ethernet"></i>
              <h5>Something is wrong with your connection!</h5>
            </div>
          ) : (
            <Fragment>
              <div className="header">
                <h4>NEW PRODUCTS</h4>
              </div>
              <div className="carousel">
                <Slider {...settings}>
                  {products.map((item) => {
                    return <Product data={item} key={item.id} />;
                  })}
                </Slider>
              </div>
            </Fragment>
          )
        ) : (
          <CubeSpinner className="loading-animation" />
        )}
      </div>
    </div>
  );
};

export default ProductsCarousel;
