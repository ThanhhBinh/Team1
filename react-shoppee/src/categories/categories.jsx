import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bannerApi } from "../api/bannerApi";
import { productApi } from "../api/productApi";
import { categoryApi } from "../api/categoryApi";
import CustomSlider from "../components/custom.slider";
import AppUrl from "../api/AppURL";
import HomeCategory from "../scenes/home/homeCategory";
import CategoryMenu from "../scenes/productList/CategoryMenu";
import Filter from "../scenes/productList/Filter";
import Product from "../components/ProductCard";
import Paginate from "../components/Paginate";
import Loading from "../components/Loading";

const Categories = () => {
    const { id } = useParams();
    const [banners, setBanners] = useState([]);
    const [currentCategoryId, setCurrentCategoryId] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState("desc");
    const [sortType, setSortType] = useState("price");
    const [priceRanges, setPriceRanges] = useState([]);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await bannerApi.getAll();
                setBanners(response.data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };

        fetchBanners();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await categoryApi.getAll();
                if (response.data.length > 0) {
                    const matchedCategory = response.data.find(
                        (cat) => cat.id === Number(id)
                    );
                    if (matchedCategory) {
                        setCurrentCategoryId(matchedCategory.id);
                    } else {
                        setCurrentCategoryId(response.data[0].id);
                    }
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError("Không thể tải danh mục.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [id]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (currentCategoryId) {
                try {
                    setLoading(true);
                    const response = await productApi.getByCategory(
                        currentCategoryId
                    );
                    setAllProducts(response.data);
                } catch (error) {
                    console.error("Error fetching products:", error);
                    setError("Không thể tải sản phẩm.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProducts();
    }, [currentCategoryId]);

    useEffect(() => {
        let filtered = [...allProducts];

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
            filtered = filtered.filter((product) =>
                ratings.includes(product.rating)
            );
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
    }, [sortOrder, sortType, allProducts, priceRanges, ratings]);

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
        // Làm tròn rating về số nguyên gần nhất
        const roundedRating = Math.round(rating);
        console.log("Rounded Rating:", roundedRating); // Sẽ in ra giá trị rating đã được làm tròn

        setRatings((prevRatings) =>
            prevRatings.includes(roundedRating)
                ? prevRatings.filter((r) => r !== roundedRating)
                : [...prevRatings, roundedRating]
        );
    };

    const handleResetFilters = () => {
        setPriceRanges([]);
        setRatings([]);
    };

    return (
        <div className="categories-page">
            <div className="container category-banners">
                <div style={{ width: "100%" }}>
                    <CustomSlider>
                        {banners.map((banner, index) => (
                            <img
                                key={index}
                                src={`${AppUrl.ImageUrl}/images/banners/${banner.image}`}
                                alt={
                                    banner.description || `Banner ${index + 1}`
                                }
                                data-link={banner.link}
                            />
                        ))}
                    </CustomSlider>
                </div>
            </div>
            <HomeCategory />

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
                                            Không có sản phẩm nào trong danh mục
                                            này.
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
                            <Paginate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
