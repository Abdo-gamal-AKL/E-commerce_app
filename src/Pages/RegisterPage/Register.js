import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import "./Register.css";

const Register = () => {
    const [values, setValues] = React.useState({
        password: "",
        passwordConfirm: "",
        email: "",
    });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.password === values.passwordConfirm) {
            if (values.password.length < 6) {
                toast("Password must be at least 6 characters", {
                    ...toastOptions,
                    type: "warning",
                });
            } else {
                const unsub = await createUserWithEmailAndPassword(
                    Auth,
                    values.email,
                    values.password
                )
                    .then(() => {
                        toast("Register successfully!", {
                            ...toastOptions,
                            type: "success",
                        });

                        setValues({
                            password: "",
                            passwordConfirm: "",
                            email: "",
                        });

                        window.location.replace("/");
                    })
                    .catch(() => {
                        toast("This email has already been registered", {
                            ...toastOptions,
                            type: "error",
                        });
                    });
                return unsub;
            }
        } else {
            toast("Password Not Match", {
                ...toastOptions,
                type: "warning",
            });
        }
    };

    return (
        <div className="register__page">
            <div className="container">
                <img
                    src="data:image/webp;base64,UklGRlICAABXRUJQVlA4TEYCAAAvqEAREMegqG0byN3BH/KeoyAQSPJHXGaBQBLP/n6radsIKn9g92O5m25OQvfgnq3FA4CBoQCABNt22zYiqQo197L/pWaAjw9M7xH9d+C2jSMpu9eLMjsl84XyH5WoKuSHC6lcyPeWTYtvv4yYxYntG8ZBOJGcZNQuwiSgMxhk1x6ryKTFJxExoqDFFmm1g9KzEhpl/0I49CvUBT7N0GhQWU7ViQ6zdh8qgGPC0tuXwOKmjFp9bZ6SRNHtbFmrF9NnhB/ubedazrrSECpCSA+fE9DgbtIn3qjuOfDSY97XForD9Kr2ScwmP6tv2Hd7EbF/N8Swiep0jCiUrmva/D1QTM5lPQ1a44SM2gaN5hP7Q961oqVr7T4np+ZOMb31sPc7MppOpfDgk5O2d5+PVTc48l1tpmt1m24/SgkDzIC0qzp/RqSS0QEjvELE6W3WlHRvzT4bUyWjAaOShXOdOOnRvpH4Q9l0uQjwIKRBe39xdJ/pRr7gG6vXTgHxPZucl1/36/X+TgZMCwuWoyeM45RBztceZxWPXMBE25DfdvBTMMh3t61KkTB/v88mXok1hrN0rcX69qfAotbMcg+KG6qyjq+Id8s9trOQQI1RO+UFEidrDOvUUP3QSEI1xs1yA3CRVLWNpBEYD94ctRIEpMeCuWYSMNwDdTB4w8maIFAHO0/y4PcPbeONhMv+RBDcWbzARz4D5TQ7iZz4vdqGhBbnqUtwr+b8UBrOHreZQR/b/To+ox7gR2zjLzMl/bxfLvdX+V9TlAI="
                    alt=""
                />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 input-parent">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="off"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            aria-describedby="emailHelp"
                            value={values.email}
                            onChange={(e) => {
                                setValues({
                                    ...values,
                                    email: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>
                    <div className="mb-3 input-parent">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            aria-describedby="emailHelp"
                            value={values.password}
                            onChange={(e) => {
                                setValues({
                                    ...values,
                                    password: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>
                    <div className="mb-3 input-parent">
                        <label
                            htmlFor="password-confirm"
                            className="form-label"
                        >
                            Password Confirmation
                        </label>
                        <input
                            autoComplete="off"
                            type="password"
                            className="form-control"
                            id="password-confirm"
                            placeholder="Confirm Password"
                            aria-describedby="emailHelp"
                            value={values.passwordConfirm}
                            onChange={(e) => {
                                setValues({
                                    ...values,
                                    passwordConfirm: e.target.value,
                                });
                            }}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="register__button"
                        variant="contained"
                    >
                        Join
                    </Button>
                    <div className="text">
                        <span className="register">
                            <NavLink to="/login">
                                Already have an account?
                            </NavLink>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
