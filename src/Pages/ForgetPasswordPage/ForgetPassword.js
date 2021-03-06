import React, { useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { Auth } from "./../../Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import "./ForgetPassword.css";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

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
        if (email) {
            const unsub = sendPasswordResetEmail(Auth, email)
                .then(() => {
                    toast("check your email", {
                        ...toastOptions,
                        type: "success",
                    });
                })
                .catch(() => {
                    toast("Wrong Data!", {
                        ...toastOptions,
                        type: "error",
                    });
                });
            return unsub;
        } else {
            toast("Please enter your email", {
                ...toastOptions,
                type: "warning",
            });
        }
    };

    return (
        <div className="forget__password__page">
            <div className="container">
                <img
                    src="data:image/webp;base64,UklGRlICAABXRUJQVlA4TEYCAAAvqEAREMegqG0byN3BH/KeoyAQSPJHXGaBQBLP/n6radsIKn9g92O5m25OQvfgnq3FA4CBoQCABNt22zYiqQo197L/pWaAjw9M7xH9d+C2jSMpu9eLMjsl84XyH5WoKuSHC6lcyPeWTYtvv4yYxYntG8ZBOJGcZNQuwiSgMxhk1x6ryKTFJxExoqDFFmm1g9KzEhpl/0I49CvUBT7N0GhQWU7ViQ6zdh8qgGPC0tuXwOKmjFp9bZ6SRNHtbFmrF9NnhB/ubedazrrSECpCSA+fE9DgbtIn3qjuOfDSY97XForD9Kr2ScwmP6tv2Hd7EbF/N8Swiep0jCiUrmva/D1QTM5lPQ1a44SM2gaN5hP7Q961oqVr7T4np+ZOMb31sPc7MppOpfDgk5O2d5+PVTc48l1tpmt1m24/SgkDzIC0qzp/RqSS0QEjvELE6W3WlHRvzT4bUyWjAaOShXOdOOnRvpH4Q9l0uQjwIKRBe39xdJ/pRr7gG6vXTgHxPZucl1/36/X+TgZMCwuWoyeM45RBztceZxWPXMBE25DfdvBTMMh3t61KkTB/v88mXok1hrN0rcX69qfAotbMcg+KG6qyjq+Id8s9trOQQI1RO+UFEidrDOvUUP3QSEI1xs1yA3CRVLWNpBEYD94ctRIEpMeCuWYSMNwDdTB4w8maIFAHO0/y4PcPbeONhMv+RBDcWbzARz4D5TQ7iZz4vdqGhBbnqUtwr+b8UBrOHreZQR/b/To+ox7gR2zjLzMl/bxfLvdX+V9TlAI="
                    alt=""
                />
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 input-parent">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                autoComplete="off"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                aria-describedby="emailHelp"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
