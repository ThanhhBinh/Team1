import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import Loading from "../../../components/Loading";

export default function Choiceflashsale() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChoiceProducts = async () => {
            try {
                const response = await productApi.getAll();
                console.log(response.data);
                const products = Array.isArray(response.data)
                    ? response.data
                    : [];

                // Lọc sản phẩm có điểm đánh giá cao
                const highRatedProducts = products.filter(
                    (product) => product.rating >= 4
                );

                // Sắp xếp sản phẩm theo lượt bán giảm dần
                const sortedProducts = highRatedProducts.sort(
                    (a, b) => b.product_stock - a.product_stock
                );

                setFilteredProducts(sortedProducts);
            } catch (error) {
                console.error(
                    "Error fetching choice flash sale products:",
                    error
                );
                setError("Lỗi khi tải sản phẩm Shopee Choice");
            } finally {
                setLoading(false);
            }
        };

        fetchChoiceProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (filteredProducts.length === 0) {
        return (
            <div>Không có sản phẩm nào trong chương trình Shopee Choice.</div>
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
