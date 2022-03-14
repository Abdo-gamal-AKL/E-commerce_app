import React, { Fragment, useEffect, useState } from "react";

// Pages
import Home from "./Pages/HomePage/Home";
import AboutUs from "./Pages/AboutUsPage/AboutUs";
import CurrentPage from "./Pages/DaynamicPage/CurrentPage";
import NotMatch from "./Pages/NotMatch/NotMatch";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/CartPage/Cart";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import CheckOut from "./Pages/CheckOutPage/CheckOut";
import ForgetPassword from "./Pages/ForgetPasswordPage/ForgetPassword";

import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Auth } from "./Firebase";
import axios from "axios";
import { setCurrentUser } from "./store/authSlice";
import { toast } from "react-toastify";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./Pages/SearchPage/Search";

console.warn = () => {};

const App = () => {
    const { DaynamicPageReducer: data, authReducer } = useSelector(
        (state) => state
    );
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const { searchResult } = useSelector((state) => state.searchReducer);

    useEffect(() => {
        Auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(setCurrentUser(user.providerData));
            }
        });
    });

    axios.interceptors.response.use(null, () => {
        setError(true);
    });

    return (
        <Fragment>
            {error && (
                <div
                    style={{
                        margin: 0,
                    }}
                    className="alert alert-danger"
                    role="alert"
                >
                    Something error!
                </div>
            )}
            <Header />
            <Switch>
                {/*pages*/}
                <Route path="/" exact component={Home} />
                <Route
                    path="/pages/laptop"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Laptops",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/accessories"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Accessories",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/computer accessories"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Computer accessories",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/A7A"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Computer accessories",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/electronics"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Electronics",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/kitchen"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Kitchen",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/sunglasses"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Sunglasses",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/gaming"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Gaming",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/mobile"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Smartphones",
                            }}
                        />
                    )}
                />
                <Route
                    path="/pages/clothes"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Clothes",
                            }}
                        />
                    )}
                />
                {/*categories*/}
                <Route
                    path="/categories/coffee machine"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Coffee Machines",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/electronics"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Electronics",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/fryer"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Fryer",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/gaming"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Gaming",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/headphone"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Headphones",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/jewelery"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Jeweleries",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/laptop"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Laptops",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/womens clothes"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Womwn's clothes",
                            }}
                        />
                    )}
                />
                div.header
                <Route
                    path="/categories/mens clothes"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Men's clothes",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/mobile"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Smartphones",
                            }}
                        />
                    )}
                />
                <Route
                    path="/categories/other"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Other categories",
                            }}
                        />
                    )}
                />
                {/* Collections */}
                <Route
                    path="/collections/laptop"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Laptops collection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/gaming"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Gaming collection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/sunglasses"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Sunglasses collection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/accessories"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Accessories colllection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/clothes"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Clothes collection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/kitchen"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Kitchen Collection",
                            }}
                        />
                    )}
                />
                <Route
                    path="/collections/computer accessories"
                    exact
                    render={() => (
                        <CurrentPage
                            data={{
                                ...data,
                                pageName: "Computer accessories collection",
                            }}
                        />
                    )}
                />
                {/* about us page */}
                <Route exact path="/about_us" component={AboutUs} />
                {/* single product page */}
                <Route exact path="/products/:id" component={SingleProduct} />
                {/* Cart Page */}
                <Route path="/cart" exact component={Cart} />
                {/* Login Page */}
                <Route
                    path="/login"
                    exact
                    render={() => {
                        if (authReducer.currentUser !== null) {
                            return <Redirect to="/" />;
                        } else {
                            return <Login />;
                        }
                    }}
                />
                {/* Register Page */}
                <Route
                    path="/register"
                    exact
                    render={() => {
                        if (authReducer.currentUser === null) {
                            return <Register />;
                        } else {
                            return <Redirect to="/" />;
                        }
                    }}
                />
                {/* CheckOut Page */}
                <Route
                    exact
                    path="/cart/check-out"
                    render={() => {
                        if (
                            localStorage.getItem("cart") !== null &&
                            authReducer.currentUser
                        ) {
                            return <CheckOut />;
                        } else {
                            toast.error("You must be logged in", {
                                theme: "colored",
                            });
                            return <Redirect to="/" />;
                        }
                    }}
                />
                <Route
                    path="/reset-password"
                    render={() => {
                        if (authReducer.currentUser === null) {
                            return <ForgetPassword />;
                        } else {
                            toast("Yaou are already logged in", {
                                theme: "colored",
                                type: "warning",
                                position: "top-center",
                            });
                            return <Redirect to="/" />;
                        }
                    }}
                />
                {/* Search Page */}
                <Route
                    path="/search"
                    exact
                    render={() => {
                        if (!searchResult) {
                            return <Redirect to="/" />;
                        } else {
                            return <Search />;
                        }
                    }}
                />
                {/* Redirect */}
                <Route path="*" exact render={NotMatch} />
            </Switch>
            <Footer />
        </Fragment>
    );
};

export default App;
