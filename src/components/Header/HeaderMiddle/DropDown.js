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
                        <li title="Home" data-bs-dismiss="offcanvas">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                            <a>Category</a>
                        </li>
                        <li data-bs-toggle="offcanvas" data-bs-target="#page">
                            <a>Pages</a>
                        </li>
                        <li data-bs-target="#page">
                            <NavLink to="/about_us">About us</NavLink>
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
                                data-bs-dismiss="offcanvas"
                            >
                                <a>Logout</a>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li
                                title="You must be logged in"
                                data-bs-dismiss="offcanvas"
                            >
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li
                                title="If you did not have any account "
                                data-bs-dismiss="offcanvas"
                            >
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </ul>
                    )}
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
                        <li title="Laptop" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/laptop">Laptop</NavLink>
                        </li>
                        <li title="Mobile" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/mobile">Mobile</NavLink>
                        </li>
                        <li title="Gaming" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/gaming">Gaming</NavLink>
                        </li>
                        <li
                            title="Computer Accessories"
                            data-bs-dismiss="offcanvas"
                        >
                            <NavLink to="/pages/computer accessories">
                                Computer Accessories
                            </NavLink>
                        </li>
                        <li title="Electronics" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/electronics">
                                Electronics
                            </NavLink>
                        </li>
                        <li title="Kitchen" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/kitchen">Kitchen</NavLink>
                        </li>
                        <li title="Sunglasses" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/sunglasses">Sunglasses</NavLink>
                        </li>
                        <li title="Accessories" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/accessories">
                                Accessories
                            </NavLink>
                        </li>
                        <li title="Clothes" data-bs-dismiss="offcanvas">
                            <NavLink to="/pages/clothes">Clothes</NavLink>
                        </li>
                    </ul>
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
                        <li title="Coffee Machine" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/coffee machine">
                                Coffee Machine
                            </NavLink>
                        </li>
                        <li title="Electronics" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/electronics">
                                Electronics
                            </NavLink>
                        </li>
                        <li title="Fryer" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/fryer">Fryer</NavLink>
                        </li>
                        <li title="Gaming" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/gaming">Gaming</NavLink>
                        </li>
                        <li title="Headphone" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/headphone">
                                Headphone
                            </NavLink>
                        </li>
                        <li title="Jewelery" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/jewelery">
                                Jewelery
                            </NavLink>
                        </li>
                        <li title="Laptop" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/laptop">Laptop</NavLink>
                        </li>
                        <li title="Mens Clothes" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/mens%20clothes">
                                Men's Clothes
                            </NavLink>
                        </li>
                        <li title="Smartphones" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/mobile">
                                Smartphones
                            </NavLink>
                        </li>
                        <li title="Womens Clothes" data-bs-dismiss="offcanvas">
                            <NavLink to="/categories/womens%20clothes">
                                Women's Clothes
                            </NavLink>
                        </li>
                        <li
                            title="Other Categories"
                            data-bs-dismiss="offcanvas"
                        >
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
