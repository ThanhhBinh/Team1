import React, { useState, useEffect } from "react";
import ProductSale from "../../../components/ProductSale";
import { productApi } from "../../../api/productApi";
import { categoryApi } from "../../../api/categoryApi";
import Loading from "../../../components/Loading";

export default function Fashionflashsale() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFashionProducts = async () => {
            try {
                // Fetch all categories
                const categoryResponse = await categoryApi.getAll();
                const categories = Array.isArray(categoryResponse.data)
                    ? categoryResponse.data
                    : [];

                // Lọc các category có tên chứa "thời trang"
                const fashionCategories = categories.filter((category) =>
                    category.name.toLowerCase().includes("thời trang")
                );

                // Lấy danh sách category_id từ fashionCategories
                const fashionCategoryIds = fashionCategories.map(
                    (category) => category.id
                );

                // Fetch all products
                const productResponse = await productApi.getAll();
                const products = Array.isArray(productResponse.data)
                    ? productResponse.data
                    : [];

                // Lọc các sản phẩm thuộc danh mục "thời trang"
                const filtered = products.filter((product) =>
                    fashionCategoryIds.includes(product.category_id)
                );

                setFilteredProducts(filtered);
            } catch (error) {
                console.error(
                    "Error fetching fashion flash sale products:",
                    error
                );
                setError("Lỗi khi tải sản phẩm Fashion Flash Sale");
            } finally {
                setLoading(false);
            }
        };

        fetchFashionProducts();
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
                Không có sản phẩm nào trong chương trình Fashion Flash Sale.
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
