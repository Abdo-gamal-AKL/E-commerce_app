import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "../../../Firebase";

import "./HeaderDown.css";

const HeaderDown = () => {
    const { currentUser } = useSelector((state) => state.authReducer);

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
        <div className="header-down">
            <div className="container">
                <ul>
                    <li title="Home">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                        Categories
                    </li>
                    <li data-bs-toggle="offcanvas" data-bs-target="#page">
                        Pages
                    </li>
                    <li>
                        <NavLink to="/about_us">About us</NavLink>
                    </li>
                </ul>
                <ul>
                    {currentUser ? (
                        <li
                            onClick={async () => {
                                await Auth.signOut()
                                    .then(() => {
                                        toast("logout Successfully !", {
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
                        >
                            Logout
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default HeaderDown;
