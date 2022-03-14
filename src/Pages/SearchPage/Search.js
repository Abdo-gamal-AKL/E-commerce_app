import React from "react";
import { useSelector } from "react-redux";
import Product from "./../../components/Product/Product";

import "./Search.css";

const Search = () => {
    const { searchResult } = useSelector((state) => state.searchReducer);

    return (
        <div className="search__page">
            <div className="container">
                {searchResult[0] && (
                    <h2 className="heading d-flex justify-content-between">
                        Search Result
                    </h2>
                )}
                {searchResult[0] === undefined && (
                    <h3>There is no products found</h3>
                )}
                <div className="products">
                    {searchResult[0] !== undefined &&
                        searchResult.map((result) => (
                            <Product key={result} data={result} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
