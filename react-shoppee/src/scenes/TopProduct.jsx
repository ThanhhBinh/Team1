import React, { useEffect, useState } from "react";
import { categoryApi } from "../api/categoryApi";
import { productApi } from "../api/productApi";
import Product from "../components/ProductCard";
import Loading from "../components/Loading";

export default function FlashSale({ duration = 12 * 10 * 60 }) {
    const [activeTab, setActiveTab] = useState(null);
    const [products, setProducts] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    // Hàm xử lý khi nhấp vào tab danh mục
    const handleTabClick = async (e, tabId) => {
        e.preventDefault();
        setActiveTab(tabId);

        // Lấy category ID từ tabId
        const categoryId = tabId.split("-").pop();

        try {
            setLoading(true);

            // Fetch sản phẩm cho danh mục hiện tại
            const productsResponse = await productApi.getByCategory(categoryId);
            setProducts((prevProducts) => ({
                ...prevProducts,
                [categoryId]: productsResponse.data,
            }));
        } catch (error) {
            console.error("Lỗi khi tải sản phẩm:", error);
            setError("Không thể tải sản phẩm.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApi.getAll();
                const limitedCategories = Array.isArray(response.data)
                    ? response.data.slice(0, 7)
                    : [];
                setCategories(limitedCategories);

                // Nếu có danh mục, chọn danh mục đầu tiên và lấy sản phẩm của nó
                if (limitedCategories.length > 0) {
                    const firstCategoryId = limitedCategories[0].id;
                    setActiveTab(`tab-id-${firstCategoryId}`); // Chọn tab đầu tiên
                    const productsResponse = await productApi.getByCategory(
                        firstCategoryId
                    );
                    setProducts({
                        [firstCategoryId]: productsResponse.data,
                    });
                }
            } catch (error) {
                console.error("Lỗi khi tải danh mục hoặc sản phẩm:", error);
                setError("Không thể tải danh mục hoặc sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="BVyP2K">
            <h1 className="yQDAhw" style={{ lineHeight: "60px" }}>
                Tìm kiếm hàng đầu
            </h1>
            <div className="thunghiem-">
                <div className="flashsale-wallet-code-">
                    <section className="tabs-container" role="tablist">
                        <h2 className="sr-only">Tabs</h2>
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                className={`tab-item ${
                                    activeTab === `tab-id-${category.id}`
                                        ? "active"
                                        : ""
                                }`}
                                title={category.name}
                                role="tab"
                                aria-selected={
                                    activeTab === `tab-id-${category.id}`
                                }
                                aria-controls={`panel-id-${category.id}`}
                                id={`tab-id-${category.id}`}
                                href={`#panel-id-${category.id}`}
                                onClick={(e) =>
                                    handleTabClick(e, `tab-id-${category.id}`)
                                }
                            >
                                <span className="tab-label">
                                    {category.name}
                                </span>
                            </a>
                        ))}
                    </section>

                    <div id="tab-content">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                id={`panel-id-${category.id}`}
                                className={`tab-content ${
                                    activeTab === `tab-id-${category.id}`
                                        ? "active"
                                        : ""
                                }`}
                                role="tabpanel"
                                aria-labelledby={`tab-id-${category.id}`}
                            >
                                <div
                                    style={{
                                        padding: "10px",
                                    }}
                                    id="list-product"
                                    className="row sm-gutter"
                                >
                                    {loading ? (
                                        <Loading />
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        (products[category.id] || []).map(
                                            (product) => (
                                                <Product
                                                    key={product.product_id}
                                                    product={product}
                                                />
                                            )
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
