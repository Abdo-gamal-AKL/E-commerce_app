import React, { useState } from "react";
import Button from "@mui/material/Button";
import ReactStars from "react-rating-stars-component";

import "./Product.css";
import { NavLink } from "react-router-dom";
import { addProductToCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const { cartReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    return (
        <div className="product">
            <div className="img">
                <img src={data.imgs[0]} alt="Product" />
                <div className="isNew">
                    {data.discount && (
                        <span className="discount">
                            -{data["discount-amount"]}$
                        </span>
                    )}
                    {data.isNew && <span className="new">New</span>}
                </div>
            </div>
            <div className="content">
                <p className="category">Category Goes Here</p>
                <h6 className="title">{data.title}</h6>
                <div className="price">
                    <h4 className="main-price">{`$${data.price}`}</h4>
                    <del>
                        {data.discount &&
                            Math.trunc(+data["discount-amount"] + data.price) +
                                "$"}
                    </del>
                </div>
                <div className="stars">
                    <hr />
                    <ReactStars
                        count={5}
                        size={18}
                        value={data.rating.rate}
                        isHalf={true}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#d10024"
                        classNames="react-stars"
                    />

                    <hr />
                </div>
                <div className="add-to-wishlist">
                    <span
                        onClick={() => {
                            setIsFavorite(!isFavorite);
                        }}
                        title="You must be logged in"
                    >
                        <i
                            className={
                                isFavorite
                                    ? "fa fa-heart favorite"
                                    : "fa-regular fa-heart"
                            }
                        ></i>
                    </span>
                    <span>
                        <NavLink to={`/products/${data.id}`}>
                            <i className="fa fa-eye"></i>
                        </NavLink>
                    </span>
                </div>
            </div>
            <div className="add">
                <div className="add-to-cart">
                    <Button
                        variant="contained"
                        onClick={() => {
                            dispatch(
                                addProductToCart({
                                    product: data,
                                    quantity: 1,
                                })
                            );
                        }}
                    >
                        <i className="fa fa-shopping-cart"></i>
                        <span>ADD TO CART</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;
