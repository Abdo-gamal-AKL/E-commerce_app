import { Button } from "@mui/material";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleCompleteBuying } from "../../store/cartSlice";
import "./CheckOut.css";

const CheckOut = () => {
    const { cartWhenUserLogout } = useSelector((state) => state.cartReducer);
    const [continueSection, setContinueSection] = useState(false);
    const dispatch = useDispatch();

    const totalArr = [];

    cartWhenUserLogout.forEach((item) => {
        totalArr.push(item.product.price);
    });

    const totalPrice =
        totalArr &&
        totalArr.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

    const data =
        cartWhenUserLogout &&
        cartWhenUserLogout.map((item) => {
            return (
                <div key={item.product.id} className="Check__product">
                    <img src={item.product.imgs[0]} alt="" />
                    <div className="info">
                        <div className="title">{item.product.title}</div>
                        <div className="rate">
                            <ReactStars
                                count={5}
                                size={18}
                                value={item.product.rating.rate}
                                isHalf={true}
                                edit={false}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                    <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#d10024"
                                classNames="react-stars"
                            />
                        </div>
                        <div className="price">{item.product.price}$</div>
                    </div>
                    <div className="price">
                        <span>Total Price:</span>
                        {"$"}
                        {item.product.price * item.quantity}
                    </div>
                    <div className="quantity">
                        <span>Total Quantity:</span>
                        {item.quantity}
                    </div>
                </div>
            );
        });

    return (
        <div className="check__out">
            <div className="container">
                <div className="ad">
                    <img
                        src="https://kinsta.com/wp-content/uploads/2020/05/mcdonalds-banner-example.png"
                        alt="AD"
                    />
                </div>
                <hr />
                <div className="content">{data}</div>
                <Button
                    variant="contained"
                    onClick={() => setContinueSection(!continueSection)}
                    className="toggle__button"
                >
                    Continue
                </Button>{" "}
                <div
                    className={
                        continueSection
                            ? "product_total_info open"
                            : "product_total_info "
                    }
                >
                    <h4 className="count">
                        Products count: {cartWhenUserLogout.length}
                    </h4>
                    <h4 className="price">
                        Total Price: {"$"}
                        {totalPrice}
                    </h4>
                    <Button
                        variant="contained"
                        className="accept__button"
                        onClick={() => {
                            dispatch(handleCompleteBuying());
                            alert("Done");
                        }}
                    >
                        Accept & Complete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
