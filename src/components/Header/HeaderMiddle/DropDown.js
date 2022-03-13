import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "../../../Firebase";

const DropDown = () => {
    const { authReducer } = useSelector((state) => state);

    const toastOptions = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };

    return (
        <Fragment>
            <div className="offcanvas offcanvas-start canvas" id="menu">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Menu</h1>
                    <button
                        type="button"
                        className="btn-close canvas-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li title="Home">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                            <a>Category</a>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#page">
                            <a>Pages</a>
                        </li>
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about_us">About us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="offcanvas offcanvas-start canvas" id="page">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Pages</h1>
                    <button
                        type="button"
                        className="btn-close canvas-close text-reset"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li title="Laptop">
                            <NavLink to="/pages/laptop">Laptop</NavLink>
                        </li>
                        <li title="Mobile">
                            <NavLink to="/pages/mobile">Mobile</NavLink>
                        </li>
                        <li title="Gaming">
                            <NavLink to="/pages/gaming">Gaming</NavLink>
                        </li>
                        <li title="Computer Accessories">
                            <NavLink to="/pages/computer accessories">
                                Computer Accessories
                            </NavLink>
                        </li>
                        <li title="Electronics">
                            <NavLink to="/pages/electronics">
                                Electronics
                            </NavLink>
                        </li>
                        <li title="Kitchen">
                            <NavLink to="/pages/kitchen">Kitchen</NavLink>
                        </li>
                        <li title="Sunglasses">
                            <NavLink to="/pages/sunglasses">Sunglasses</NavLink>
                        </li>
                        <li title="Accessories">
                            <NavLink to="/pages/accessories">
                                Accessories
                            </NavLink>
                        </li>
                        <li title="Clothes">
                            <NavLink to="/pages/clothes">Clothes</NavLink>
                        </li>
                    </ul>

                    {authReducer.currentUser ? (
                        <ul>
                            <li
                                onClick={async () => {
                                    await Auth.signOut()
                                        .then(() => {
                                            toast("Logout Successfully !", {
                                                ...toastOptions,
                                                type: "success",
                                            });

                                            window.location.replace("/");
                                        })
                                        .catch(() => {
                                            toast("Newtwork Error!", {
                                                ...toastOptions,
                                                type: "warning",
                                            });
                                        });
                                }}
                                title="You must be logged in"
                            >
                                <a>Logout</a>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li title="You must be logged in">
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li title="If you did not have any account ">
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="offcanvas offcanvas-start canvas" id="demo">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Categories</h1>
                    <button
                        type="button"
                        className="btn-close text-reset canvas-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li title="Coffee Machine">
                            <NavLink to="/categories/coffee machine">
                                Coffee Machine
                            </NavLink>
                        </li>
                        <li title="Electronics">
                            <NavLink to="/categories/electronics">
                                Electronics
                            </NavLink>
                        </li>
                        <li title="Fryer">
                            <NavLink to="/categories/fryer">Fryer</NavLink>
                        </li>
                        <li title="Gaming">
                            <NavLink to="/categories/gaming">Gaming</NavLink>
                        </li>
                        <li title="Headphone">
                            <NavLink to="/categories/headphone">
                                Headphone
                            </NavLink>
                        </li>
                        <li title="Jewelery">
                            <NavLink to="/categories/jewelery">
                                Jewelery
                            </NavLink>
                        </li>
                        <li title="Laptop">
                            <NavLink to="/categories/laptop">Laptop</NavLink>
                        </li>
                        <li title="Mens Clothes">
                            <NavLink to="/categories/mens%20clothes">
                                Men's Clothes
                            </NavLink>
                        </li>
                        <li title="Smartphones">
                            <NavLink to="/categories/mobile">
                                Smartphones
                            </NavLink>
                        </li>
                        <li title="Womens Clothes">
                            <NavLink to="/categories/womens%20clothes">
                                Women's Clothes
                            </NavLink>
                        </li>
                        <li title="Other Categories">
                            <NavLink to="/categories/other">
                                Other Categories
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default DropDown;
