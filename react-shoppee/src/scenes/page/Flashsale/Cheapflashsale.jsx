import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import Loading from "../../../components/Loading";

export default function Cheapflashsale() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlashSaleProducts = async () => {
            try {
                const response = await productApi.getAll();
                console.log(response.data);
                const products = Array.isArray(response.data)
                    ? response.data
                    : [];
                const filtered = products.filter((product) => {
                    // Tính giá hiện tại sau khi giảm giá
                    const currentPrice =
                        product.price * (1 - (product.discount || 0) / 100);
                    // Lọc sản phẩm có discount lớn hơn 0 và giá hiện tại dưới 10 triệu
                    return product.discount > 0 && currentPrice < 1000000;
                });
                setFilteredProducts(filtered);
            } catch (error) {
                console.error("Error fetching flash sale products:", error);
                setError("Lỗi khi tải sản phẩm flash sale");
            } finally {
                setLoading(false);
            }
        };

        fetchFlashSaleProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (filteredProducts.length === 0) {
        return <div>Không có sản phẩm nào trong chương trình flash sale.</div>;
    }

    return (
        <>
            {filteredProducts.map((product) => (
                <ProductSale key={product.product_id} product={product} />
            ))}
        </>
    );
}
