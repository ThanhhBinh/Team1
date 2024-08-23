import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import Loading from "../../../components/Loading";

export default function TopFlashSale() {
    const [topProducts, setTopProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopFlashSaleProducts = async () => {
            try {
                const response = await productApi.getAll();
                console.log(response.data);
                const products = Array.isArray(response.data)
                    ? response.data
                    : [];

                // Lọc sản phẩm có discount lớn hơn 0
                const filtered = products.filter(
                    (product) => product.discount > 0
                );

                // Sắp xếp sản phẩm theo discount (giảm dần), sau đó sắp xếp theo product_stock (bán chạy nhất)
                const sorted = filtered.sort((a, b) => {
                    // So sánh discount giảm dần
                    if ((b.discount || 0) !== (a.discount || 0)) {
                        return (b.discount || 0) - (a.discount || 0);
                    }
                    // Nếu discount giống nhau, sắp xếp theo product_stock giảm dần
                    return (b.product_stock || 0) - (a.product_stock || 0);
                });

                setTopProducts(sorted);
            } catch (error) {
                console.error("Error fetching top flash sale products:", error);
                setError("Lỗi khi tải sản phẩm top flash sale");
            } finally {
                setLoading(false);
            }
        };

        fetchTopFlashSaleProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (topProducts.length === 0) {
        return <div>Không có sản phẩm nào trong chương trình flash sale.</div>;
    }

    return (
        <>
            {topProducts.map((product) => (
                <ProductSale key={product.product_id} product={product} />
            ))}
        </>
    );
}
