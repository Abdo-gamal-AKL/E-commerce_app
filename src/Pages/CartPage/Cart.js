import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./Cart.css";
import { deleteProduct, handleQuantity } from "../../store/cartSlice";

const Cart = () => {
  const { cartWhenUserLogout } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const cartProducts =
    cartWhenUserLogout &&
    cartWhenUserLogout.map((item) => {
      return (
        <div key={item.product.id} className="cart__product">
          <NavLink to={`/products/${item.id}`}>
            <img src={item.product.imgs[0]} alt="" />
          </NavLink>
          <NavLink to={`/products/${item.product.id}`}>
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
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#d10024"
                  classNames="react-stars"
                />
              </div>
              <div className="price">{item.product.price}$</div>
            </div>
          </NavLink>
          <div className="edit">
            <div className="quantity">
              <button
                onClick={() => {
                  dispatch(
                    handleQuantity({
                      id: item.product.id,
                      type: "INC",
                    })
                  );
                }}
              >
                +
              </button>
              <div className="input_number">{item.quantity}</div>
              <button
                onClick={() =>
                  dispatch(
                    handleQuantity({
                      id: item.product.id,
                      type: "DEC",
                    })
                  )
                }
              >
                -
              </button>
            </div>
            <div className="remove">
              <DeleteForeverIcon
                className="delete_icon"
                onClick={() => dispatch(deleteProduct(item.product.id))}
              />
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="cart__page">
      <div className="container">
        {cartWhenUserLogout[0] !== undefined ? (
          <Fragment>
            {cartProducts}
            <NavLink to="/cart/check-out">
              <Button variant="contained" className="submit__shopping">
                Submit shopping
              </Button>
            </NavLink>
          </Fragment>
        ) : (
          <h2 className="cart__empty">Add somthing to cart</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
