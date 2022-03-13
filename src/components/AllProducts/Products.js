import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product/Product";
import { CubeSpinner } from "react-spinners-kit";

import {
  pagesCountHandler,
  setCurrentPage,
  paginationNumbersArrHandler,
  currentPageNumberHandler,
  setFilterdArr,
} from "../../store/productsSlice";

import "./Products.css";

const Products = () => {
  const {
    paginationNumbersArr,
    currentPageNumber,
    pagesCount,
    currentPageArr,
    isFailed,
    isLoading,
  } = useSelector((state) => state.productsReducer);

  const dispatch = useDispatch();

  const productsElements =
    currentPageArr &&
    currentPageArr.map((item) => {
      return <Product key={Math.random()} data={item} />;
    });

  const paginationBullets =
    paginationNumbersArr &&
    paginationNumbersArr.map((item) => (
      <li
        key={item}
        className={
          currentPageNumber === item ? "page-item active" : "page-item "
        }
        aria-current="page"
        onClick={() => {
          dispatch(currentPageNumberHandler(item));
        }}
      >
        <span className="page-link" key={item}>
          {item}
        </span>
      </li>
    ));

  React.useEffect(() => {
    dispatch(setFilterdArr("all"));
    dispatch(pagesCountHandler());
    dispatch(paginationNumbersArrHandler());
  }, [dispatch]);

  return (
    <div className="products">
      <div className="container">
        {isLoading ? (
          <CubeSpinner className="loading-animation" />
        ) : isFailed ? (
          <div className="error">
            <i className="fa fa-ethernet"></i>
            <h5>Something is wrong with your connection!</h5>
          </div>
        ) : (
          <Fragment>
            <div className="products-header">
              <h3>new products</h3>
              <ul>
                <li
                  onClick={() => {
                    dispatch(setFilterdArr("all"));
                    dispatch(paginationNumbersArrHandler());
                    dispatch(setCurrentPage());
                  }}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    dispatch(setFilterdArr("laptop"));
                    dispatch(paginationNumbersArrHandler());
                    dispatch(pagesCountHandler());
                  }}
                >
                  Laptops
                </li>
                <li
                  onClick={() => {
                    dispatch(setFilterdArr("mobile"));
                    dispatch(paginationNumbersArrHandler());
                    dispatch(pagesCountHandler());
                  }}
                >
                  Smartphones
                </li>
                <li
                  onClick={() => {
                    dispatch(setFilterdArr("accessories"));
                    dispatch(paginationNumbersArrHandler());
                    dispatch(pagesCountHandler());
                  }}
                >
                  Accessories
                </li>
                <li
                  onClick={() => {
                    dispatch(setFilterdArr("clothes"));
                    dispatch(paginationNumbersArrHandler());
                    dispatch(pagesCountHandler());
                  }}
                >
                  Clothes
                </li>
              </ul>
            </div>
            <div className="products">{productsElements}</div>
            <nav aria-label="Page navigation example d-flex justify-content center flex-wrap-wrap">
              <ul className="pagination d-flex justify-content-center">
                <li
                  className="page-link"
                  aria-current="page"
                  onClick={() => {
                    dispatch(
                      currentPageNumberHandler(
                        currentPageNumber <= 1 ? 1 : currentPageNumber - 1
                      )
                    );
                  }}
                >
                  Previous
                </li>
                {paginationBullets}
                <li
                  className="page-link"
                  onClick={() => {
                    dispatch(
                      currentPageNumberHandler(
                        currentPageNumber === pagesCount
                          ? pagesCount
                          : currentPageNumber + 1
                      )
                    );
                  }}
                >
                  Next
                </li>
              </ul>
            </nav>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Products;
