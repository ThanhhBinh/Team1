import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productApi } from "../../api/productApi";
import Filter from "../../scenes/productList/Filter";
import Product from "../../components/ProductCard";
import Loading from "../../components/Loading";
import CategoryMenu from "../productList/CategoryMenu";

const SearchPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get("query") || ""; // Lấy từ khóa tìm kiếm từ query string
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState("desc");
    const [sortType, setSortType] = useState("price");
    const [priceRanges, setPriceRanges] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await productApi.getAll(); // Lấy tất cả sản phẩm
                setAllProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Không thể tải sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let filtered = [...allProducts];

        // Lọc theo từ khóa tìm kiếm
        if (query) {
            filtered = filtered.filter((product) =>
                product.product_name.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Lọc theo nhiều khoảng giá
        if (priceRanges.length > 0) {
            filtered = filtered.filter((product) =>
                priceRanges.some(
                    (range) =>
                        product.price >= range.min && product.price <= range.max
                )
            );
        }

        // Lọc theo nhiều đánh giá
        if (ratings.length > 0) {
            filtered = filtered.filter((product) => {
                const roundedProductRating = Math.round(product.rating);
                return ratings.includes(roundedProductRating);
            });
        }

        // Sắp xếp sản phẩm
        if (sortType === "price") {
            filtered.sort((a, b) =>
                sortOrder === "asc" ? a.price - b.price : b.price - a.price
            );
        } else if (sortType === "date") {
            filtered.sort((a, b) =>
                sortOrder === "asc"
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date)
            );
        } else if (sortType === "sold") {
            filtered.sort((a, b) =>
                sortOrder === "asc"
                    ? a.product_stock - b.product_stock
                    : b.product_stock - a.product_stock
            );
        }

        setFilteredProducts(filtered);
    }, [query, sortOrder, sortType, allProducts, priceRanges, ratings]);

    const handleSortChange = (type, order) => {
        setSortType(type);
        setSortOrder(order);
    };

    const handlePriceRangeChange = () => {
        const min =
            parseFloat(document.querySelector('input[name="min"]').value) || 0;
        const max =
            parseFloat(document.querySelector('input[name="max"]').value) ||
            Infinity;

        setPriceRanges((prevRanges) => [...prevRanges, { min, max }]);
    };

    const handleRatingChange = (rating) => {
        setRatings((prevRatings) => {
            if (prevRatings.includes(rating)) {
                // Loại bỏ rating nếu đã tồn tại
                return prevRatings.filter((r) => r !== rating);
            } else {
                // Thêm rating nếu chưa tồn tại
                return [...prevRatings, rating];
            }
        });
    };

    const handleResetFilters = () => {
        setPriceRanges([]);
        setRatings([]);
    };

    return (
        <div className="search-page">
            <div className="container">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-2 m-0 c-0">
                            <CategoryMenu
                                onPriceRangeChange={handlePriceRangeChange}
                                onRatingChange={handleRatingChange}
                                onResetFilters={handleResetFilters}
                            />
                        </div>
                        <div className="col l-10 m-12 c-12">
                            <h1 className="shopee-search-result-header">
                                <div aria-hidden="true">
                                    <svg
                                        viewBox="0 0 18 24"
                                        className="shopee-svg-icon icon-hint-bulb"
                                    >
                                        <g transform="translate(-355 -149)">
                                            <g transform="translate(355 149)">
                                                <g
                                                    fillRule="nonzero"
                                                    transform="translate(5.4 19.155556)"
                                                >
                                                    <path d="m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z" />
                                                    <g transform="translate(1.9 2.666667)">
                                                        <path d="m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z" />
                                                    </g>
                                                </g>
                                                <path
                                                    d="m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z"
                                                    fillRule="nonzero"
                                                />
                                                <path
                                                    d="m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z"
                                                    fillRule="nonzero"
                                                />
                                                <path d="m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="shopee-search-result-header__text">
                                    Kết quả tìm kiếm cho từ khoá '
                                    <span
                                        className="shopee-search-result-header__text-highlight"
                                        style={{
                                            color: "rgb(238, 77, 45)",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {query}
                                    </span>
                                    '
                                </span>
                            </h1>

                            <Filter onSortChange={handleSortChange} />
                            <div className="products-list">
                                <div
                                    id="list-product"
                                    className="row sm-gutter"
                                >
                                    {loading ? (
                                        <Loading />
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : filteredProducts.length === 0 ? (
                                        <p>
                                            Không có sản phẩm nào phù hợp với
                                            tìm kiếm của bạn.
                                        </p>
                                    ) : (
                                        filteredProducts.map((product) => (
                                            <Product
                                                key={product.product_id}
                                                product={product}
                                            />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
