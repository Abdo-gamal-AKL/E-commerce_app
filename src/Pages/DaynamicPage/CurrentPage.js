import axios from "axios";
import React, { useEffect } from "react";
import { CubeSpinner } from "react-spinners-kit";
import Product from "../../components/Product/Product";
import { errorHandler } from "../../store/productsSlice";
import { useDispatch } from "react-redux";

import "./CurrentPage.css";
import { setDaynamicPage } from "../../store/PageDataSlice";

const CurrentPage = ({ data: state }) => {
    const dispatch = useDispatch();
    const pathName = window.location.pathname;

    useEffect(() => {
        if (pathName.slice(1, 6) === "pages") {
            dispatch(
                setDaynamicPage({
                    pageName: pathName.slice(7),
                    section: "page",
                })
            );
        } else if (pathName.slice(1, 11) === "categories") {
            dispatch(
                setDaynamicPage({
                    pageName: pathName.slice(12),
                    section: "category",
              })
            );
        } else if (pathName.slice(1, 12) === "collections") {
            dispatch(
                setDaynamicPage({
                    pageName: pathName.slice(13),
                    section: "page",
                })
            );
        }
    }, [pathName, dispatch]);

    axios.interceptors.response.use(null, () => {
        dispatch(errorHandler());
    });
    const ProductsElement =
        state.data &&
        state.data.map((item) => <Product key={item.id} data={item} />);

    return (
        <div className="page">
            {state.isLoading && <CubeSpinner className="loading-animation" />}
            <div className="container">
                {state.isFailed && (
                    <div className="error">
                        <i className="fa fa-ethernet"></i>
                        <h5>Something is wrong with your connection!</h5>
                    </div>
                )}
                {!state.isLoading && <h3>{state.pageName}</h3>}
                <div className="current-page">{ProductsElement}</div>
            </div>
        </div>
    );
};

export default CurrentPage;
