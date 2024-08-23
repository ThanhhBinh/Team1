import React, { useEffect, useState } from "react";
import Product from "../components/ProductCard"; // Import component Product
import Loading from "../components/Loading";
import { productApi } from "../api/productApi";

export default function DailyDiscover({ duration = 12 * 10 * 60 }) {
    const [activeTab, setActiveTab] = useState("tab-id-all");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleTabClick = (e, tabId) => {
        e.preventDefault();
        setActiveTab(tabId); // Cập nhật tab hiện tại
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
        link.rel = "stylesheet";
        link.integrity =
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.getAll();
                setProducts(response.data);
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
                setError("Không thể tải sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div style={{ display: "contents" }}>
            <div className="BVyP2Ke container">
                <div className="ciPWrW">
                    <hr className="PM144o" />
                    <h1 className="JmXfms">GỢI Ý HÔM NAY</h1>
                </div>
                <div className="grid wide">
                    <div className="QLiXDZ row sm-gutter">
                        {loading && <Loading />}
                        {error && !loading && <p>{error}</p>}
                        {!loading && products.length === 0 && (
                            <p>Không có sản phẩm nào.</p>
                        )}
                        {!loading &&
                            products.length > 0 &&
                            products.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
