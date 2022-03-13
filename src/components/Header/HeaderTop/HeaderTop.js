import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./HeaderTop.css";

const HeaderTop = () => {
    const { error } = useSelector((state) => state.productsReducer);
    const { currentUser } = useSelector((state) => state.authReducer);

    return (
        <Fragment>
            {error && (
                <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                    style={{
                        margin: 0,
                    }}
                >
                    <span style={{ margin: "0 10px" }}>
                        Somthing Wrong In Your Network
                    </span>
                    <i className="fa fa-circle-exclamation"></i>
                </div>
            )}

            <div className="header-top">
                <div className="container">
                    <ul className="user-info">
                        <li>
                            <i className="fa fa-phone"></i>
                            <p>fake +010-6530-7144</p>
                        </li>
                        {currentUser && (
                            <li>
                                <i className="fa-regular fa-envelope"></i>
                                <p>{currentUser[0].email}</p>
                            </li>
                        )}
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>fake 1734 Stonecoal Road</p>
                        </li>
                    </ul>
                    <ul className="global-info">
                        <li>
                            <i className="fa-regular fa-dollar"></i>
                            <p>USD</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderTop;
