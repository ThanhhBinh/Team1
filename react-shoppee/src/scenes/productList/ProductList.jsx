import React, { useEffect, useState } from "react";
import ProductBox from "../../components/ProductBox";
import CategoryMenu from "./CategoryMenu";
import Filter from "./Filter";
import Paginate from "../../components/Paginate";
// import { productApi } from "../../api/productApi";

const ProductList = () => {
    return (
        <div className="container">
            <div className="grid wide">
                <div className="row sm-gutter">
                    <div className="col l-2 m-0 c-0">
                        <CategoryMenu />
                    </div>
                    <div className="col l-10 m-12 c-12">
                        <Filter />
                        <div className="home-product">
                            <ProductBox />
                        </div>
                        <Paginate />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
