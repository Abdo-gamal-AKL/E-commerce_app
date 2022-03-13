import React, { Fragment, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import {
    hadnleCurrentImgSRC,
    handleSingleProduct,
    addComment,
} from "../../store/singleProductSlice";

import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { CubeSpinner } from "react-spinners-kit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./SingleProduct.css";
import { addProductToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    const [comment, setCommentValue] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [rating, setRating] = useState();
    const [count, setCount] = useState(1);

    const { authReducer } = useSelector((state) => state);

    const { singleProduct, isFailed, currentProductImgSRC } = useSelector(
        (state) => state.singleProductReducer
    );

    const descritionElement =
        singleProduct &&
        singleProduct.description.map((item) => {
            return <li key={item}>{item}</li>;
        });

    const hadnleDecrement = () => {
        setCount(count <= 1 ? 1 : count - 1);
    };

    const hadnleIncrement = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        dispatch(handleSingleProduct(+match.params.id));
    }, [dispatch]);

    return (
        <div className="single__product">
            <div className="container">
                {isFailed && (
                    <div className="error">
                        <i className="fa fa-ethernet"></i>
                        <h5>Something is wrong with your connection!</h5>
                    </div>
                )}
                {singleProduct !== null ? (
                    <Fragment>
                        <div className="content">
                            <div className="img">
                                <div className="single__img">
                                    <img
                                        src={
                                            currentProductImgSRC
                                                ? currentProductImgSRC
                                                : singleProduct.imgs[0]
                                        }
                                        alt=""
                                    />
                                </div>
                                <ul className="imgs">
                                    {singleProduct.imgs.map((item) => {
                                        return (
                                            <li
                                                key={item}
                                                onClick={() => {
                                                    dispatch(
                                                        hadnleCurrentImgSRC(
                                                            item
                                                        )
                                                    );
                                                }}
                                            >
                                                <img src={item} alt="" />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="info">
                                <h2>{singleProduct.title}</h2>
                                <div className="price__date">
                                    <div className="column price_discount">
                                        <div className="price">
                                            <span>Price:</span>{" "}
                                            {singleProduct.price}$
                                        </div>
                                        <div className="discount">
                                            {singleProduct.discount && (
                                                <Fragment>
                                                    <span>Before:</span>
                                                    <del>
                                                        {singleProduct.price +
                                                            +singleProduct[
                                                                "discount-amount"
                                                            ]}
                                                        $
                                                    </del>
                                                </Fragment>
                                            )}
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="fake__date">
                                            <span>fake date</span> 32 / 5 / 2019
                                        </div>
                                        <div className="stars">
                                            <ReactStars
                                                count={5}
                                                size={18}
                                                value={
                                                    singleProduct.rating.rate
                                                }
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={
                                                    <i className="far fa-star"></i>
                                                }
                                                halfIcon={
                                                    <i className="fa fa-star-half-alt"></i>
                                                }
                                                fullIcon={
                                                    <i className="fa fa-star"></i>
                                                }
                                                activeColor="#d10024"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <div className="input_number_parent">
                                        <button onClick={hadnleIncrement}>
                                            +
                                        </button>
                                        <div className="input_number">
                                            {count}
                                        </div>
                                        <button onClick={hadnleDecrement}>
                                            -
                                        </button>
                                    </div>
                                    <Button
                                        onClick={() => {
                                            dispatch(
                                                addProductToCart({
                                                    product: singleProduct,
                                                    quantity: count,
                                                })
                                            );
                                        }}
                                        className="add_to_cart"
                                        variant="ededAdd"
                                    >
                                        <span>Add to cart</span>{" "}
                                        <ArrowForwardIosIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Description</h2>
                            <hr />
                            <ul>{descritionElement}</ul>
                        </div>
                        <div className="testimonials">
                            <h2>Testimonials</h2>
                            <hr />
                            <div className="add__comment">
                                <div className="btn">
                                    <Button
                                        onClick={() => {
                                            setIsFormOpen(!isFormOpen);
                                        }}
                                        className="add_comment_button"
                                        variant="ededAdd"
                                    >
                                        Add Comment
                                    </Button>
                                </div>
                                <div
                                    className={
                                        isFormOpen ? "form open" : "form"
                                    }
                                >
                                    <TextField
                                        className="comment_input"
                                        id="outlined-textarea"
                                        label="comment..."
                                        placeholder="Type your opinion"
                                        multiline
                                        onChange={(e) => {
                                            setCommentValue(e.target.value);
                                        }}
                                        value={comment}
                                    />
                                    <div className="rating">
                                        <span>Rate it:</span>
                                        <ReactStars
                                            className="stars"
                                            onChange={(e) => {
                                                setRating(e);
                                            }}
                                            value={rating}
                                            count={5}
                                            size={18}
                                            isHalf={true}
                                            edit={true}
                                            emptyIcon={
                                                <i className="far fa-star"></i>
                                            }
                                            halfIcon={
                                                <i className="fa fa-star-half-alt"></i>
                                            }
                                            fullIcon={
                                                <i className="fa fa-star"></i>
                                            }
                                            activeColor="#d10024"
                                        />
                                    </div>
                                    <div className="add__btn">
                                        <Button
                                            onClick={() => {
                                                if (
                                                    authReducer.currentUser !==
                                                    null
                                                ) {
                                                    if (comment && rating) {
                                                        setCommentValue("");
                                                        setRating(0);
                                                        dispatch(
                                                            addComment({
                                                                name: "Username",
                                                                comment,
                                                                rate: rating,
                                                            })
                                                        );
                                                    }
                                                    return;
                                                } else {
                                                    toast.warning(
                                                        "you must be logged in",
                                                        {
                                                            theme: "colored",
                                                        }
                                                    );
                                                }
                                            }}
                                            variant="contained"
                                            className="submit__btn"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>

                                {singleProduct.testimonial ? (
                                    <div className="comments">
                                        {singleProduct.testimonial.map(
                                            (item) => (
                                                <div
                                                    className="comment"
                                                    key={Math.random()}
                                                >
                                                    <div className="heading">
                                                        <PersonIcon className="profile_icon" />
                                                        <h4>{item.name}</h4>
                                                        <div className="rating">
                                                            {item.rate} Stars
                                                        </div>
                                                        <ReactStars
                                                            classNames="comment__stars"
                                                            count={5}
                                                            size={18}
                                                            value={item.rate}
                                                            isHalf={true}
                                                            edit={false}
                                                            emptyIcon={
                                                                <i className="far fa-star"></i>
                                                            }
                                                            halfIcon={
                                                                <i className="fa fa-star-half-alt"></i>
                                                            }
                                                            fullIcon={
                                                                <i className="fa fa-star"></i>
                                                            }
                                                            activeColor="#d10024"
                                                        />
                                                    </div>
                                                    <p>{item.comment}</p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <div className="no__commments">
                                        No Comments
                                    </div>
                                )}
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <CubeSpinner className="loading-animation" />
                )}
            </div>
        </div>
    );
};

export default SingleProduct;
