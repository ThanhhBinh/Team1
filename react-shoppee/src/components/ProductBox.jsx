import React, { useEffect, useState } from "react";
import { categoryApi } from "../api/categoryApi";
import { productApi } from "../api/productApi";
import Product from "./ProductCard";
import Loading from "./Loading";
export default function ProductBox() {
    return (
        <div id="list-product" className="row sm-gutter">
            <Product />
        </div>
    );
}
