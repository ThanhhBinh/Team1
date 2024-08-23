import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import { categoryApi } from "../../../api/categoryApi";
import Loading from "../../../components/Loading";

export default function Electronicflashsale() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchElectronicProducts = async () => {
            try {
                // Fetch all categories
                const categoryResponse = await categoryApi.getAll();
                const categories = Array.isArray(categoryResponse.data)
                    ? categoryResponse.data
                    : [];

                // Lọc các category có tên chứa "Điện Thoại"
                const electronicCategories = categories.filter((category) =>
                    category.name.toLowerCase().includes("điện thoại")
                );

                // Lấy danh sách category_id từ electronicCategories
                const electronicCategoryIds = electronicCategories.map(
                    (category) => category.id
                );

                // Fetch all products
                const productResponse = await productApi.getAll();
                const products = Array.isArray(productResponse.data)
                    ? productResponse.data
                    : [];

                // Lọc các sản phẩm thuộc danh mục "Điện Thoại"
                const filtered = products.filter((product) =>
                    electronicCategoryIds.includes(product.category_id)
                );

                setFilteredProducts(filtered);
            } catch (error) {
                console.error(
                    "Error fetching electronic flash sale products:",
                    error
                );
                setError("Lỗi khi tải sản phẩm Electronic Flash Sale");
            } finally {
                setLoading(false);
            }
        };

        fetchElectronicProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (filteredProducts.length === 0) {
        return (
            <div>
                Không có sản phẩm nào trong chương trình Electronic Flash Sale.
            </div>
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
