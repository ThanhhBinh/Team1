import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import Loading from "../../../components/Loading";

export default function Dealflashsale() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDealProducts = async () => {
            try {
                const response = await productApi.getAll();
                console.log(response.data);
                const products = Array.isArray(response.data)
                    ? response.data
                    : [];

                // Lọc sản phẩm dựa trên điều kiện "deal"
                const filtered = products.filter((product) => {
                    return product.discount > 20;
                });

                setFilteredProducts(filtered);
            } catch (error) {
                console.error(
                    "Error fetching deal flash sale products:",
                    error
                );
                setError("Lỗi khi tải sản phẩm Deal Flash Sale");
            } finally {
                setLoading(false);
            }
        };

        fetchDealProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (filteredProducts.length === 0) {
        return (
            <div>Không có sản phẩm nào trong chương trình Deal Flash Sale.</div>
        );
    }

    return (
        <>
            {filteredProducts.map((product) => (
                <ProductSale key={product.product_id} product={product} />
            ))}
        </>
    );
}
