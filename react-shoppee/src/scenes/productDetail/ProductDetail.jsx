import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/ProductCard";
import { addToCart } from "../../state/cartSlice";
import { productApi } from "../../api/productApi";
import { useNavigate, useParams } from "react-router-dom";
import PageProductShop from "./PageProductShop";
import ProductRating from "./ProductRating";
import Loading from "../../components/Loading";
import AppUrl from "../../api/AppURL";
export default function ProductDetail() {
    const [product, setProductDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviewCount, setReviewCount] = useState(null);
    const { id } = useParams(); // Lấy id từ URL
    const userId = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [showNotification, setShowNotification] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const handleAddToCart = () => {
        if (product) {
            const userId = localStorage.getItem("user_id"); // Lấy user_id từ localStorage
            if (userId) {
                dispatch(
                    addToCart({ item: product, quantity, user_id: userId })
                );
                setShowNotification(true);
                setTimeout(() => {
                    setShowNotification(false);
                }, 3000);
            } else {
                // Nếu không có user_id, thông báo cho người dùng hoặc chuyển hướng đến trang đăng nhập
                alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
                // Hoặc điều hướng đến trang đăng nhập
                navigate("/login");
            }
        }
    };

    const handleBuyNow = () => {
        if (product) {
            // Điều hướng đến trang thanh toán và gửi thông tin sản phẩm
            navigate("/checkout", { state: { product, quantity } });
        }
    };
    const formatVND = (value) => {
        return value.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };
    //Nút tăng giảm sản phẩm
    const handleDecrease = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) =>
            Math.min(prevQuantity + 1, product?.product_stock || 0)
        ); // Tăng số lượng, đảm bảo không vượt quá số lượng có sẵn
    };
    //end tăng giảm

    //Lấy id của chi tiết sản phẩm
    useEffect(() => {
        const fetchProductDetail = async () => {
            if (!id) return; // Kiểm tra id có tồn tại không

            try {
                setLoading(true);
                const response = await productApi.get(id);
                if (response && response.data) {
                    const currentProduct = response.data;
                    setProductDetail(currentProduct);

                    // Fetch các sản phẩm từ cùng danh mục
                    const categoryId = currentProduct.category_id;
                    try {
                        const relatedResponse = await productApi.getByCategory(
                            categoryId
                        );

                        // Loại trừ sản phẩm hiện tại khỏi danh sách sản phẩm liên quan
                        const filteredProducts = relatedResponse.data.filter(
                            (product) =>
                                product.product_id !== currentProduct.product_id
                        );
                        setRelatedProducts(filteredProducts);

                        //sản phẩm cùng thương hiệu
                        const suggestedResponse = await productApi.getAll();
                        const allProducts = suggestedResponse.data;
                        const topProducts = allProducts
                            .sort((a, b) => b.product_stock - a.product_stock) // Sắp xếp theo số lượng bán giảm dần
                            .slice(0, 12);

                        setSuggestedProducts(topProducts);
                    } catch (error) {
                        console.error("Lỗi khi tải sản phẩm liên quan:", error);
                        setError("Lỗi khi tải sản phẩm liên quan.");
                    }
                } else {
                    throw new Error("Dữ liệu sản phẩm không hợp lệ");
                }
            } catch (error) {
                setError("Lỗi khi tải sản phẩm: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);
    //end chi tiết sản phẩm

    // Fetch số lượng đánh giá
    useEffect(() => {
        if (!id) return; // Kiểm tra id có tồn tại không

        const fetchReviewCount = async () => {
            try {
                const response = await productApi.getReviewCount(id);
                setReviewCount(response.data.count);
            } catch (error) {
                console.error("Lỗi khi tải số lượng đánh giá:", error);
                setError("Lỗi khi tải số lượng đánh giá.");
            }
        };

        fetchReviewCount();
    }, [id]);
    //end số lượng đánh giá

    //Fetch sản phẩm có yêu thích

    //end sản phẩm có yêu thích
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }
    const rating = Number.isFinite(product.rating)
        ? Math.max(0, Math.min(5, Math.floor(product.rating)))
        : 0;

    return (
        <div className="KrtGbA">
            {showNotification && (
                <div
                    style={{
                        width: "585px",
                        height: "300px",
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#000",
                        color: "#fff",
                        opacity: "80%",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textAlign: "center",
                        fontSize: "18px",
                        paddingTop: "70px",
                        zIndex: 1000,
                    }}
                >
                    <div className="stick-cart">
                        <img src="../assets/img/sp/stick.png" alt="" />
                    </div>
                    <div>Thêm sản phẩm vào giỏ hàng thành công!</div>
                </div>
            )}
            <div className="page-product">
                <div
                    className="tracking-impression-placeholder"
                    style={{
                        position: "fixed",
                        zIndex: 99999,
                        bottom: 0,
                        left: 0,
                    }}
                />
                <div role="main" className="container">
                    <section className="product-briefing flex card vX9SYw">
                        <h1 className="Bf9ap6">{product.product_name}</h1>
                        <div />
                        <section className="TFDXyQ">
                            <h2 className="Bf9ap6">Product Image Section</h2>
                            <div className="flex flex-column">
                                <div className="TMw1ot">
                                    <div className="xxW0BG">
                                        <div
                                            className="HJ5l1F"
                                            style={{ display: "block" }}
                                        >
                                            <div className="shopee-image-placeholder CCU0Uo">
                                                <svg
                                                    enableBackground="new 0 0 54 61"
                                                    viewBox="0 0 54 61"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-shopee icon-shopee-tiny"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="center Oj2Oo7">
                                                <img
                                                    alt=""
                                                    className="PhxDN7"
                                                    src="https://down-vn.img.susercontent.com/file/sg-11134301-7rblc-lq356cca6puo93_tn"
                                                />
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="airUhU">
                                    <div className="UBG7wZ">
                                        <div className="jA1mTx">
                                            <div className="SarUkj shopee-image-container">
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                            <img
                                                className="IMAW1w"
                                                src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                alt={
                                                    product.name ||
                                                    "Product Image"
                                                } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                            />
                                            <img
                                                className="IMAW1w"
                                                src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                alt={
                                                    product.name ||
                                                    "Product Image"
                                                } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                            />
                                            <div className="wOzCmT thumbnail-selected-mask" />
                                        </div>
                                    </div>
                                    <div className="UBG7wZ">
                                        <div className="jA1mTx">
                                            <div className="SarUkj shopee-image-container">
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                            <div className="thumbnail-selected-mask" />
                                        </div>
                                    </div>
                                    <div className="UBG7wZ">
                                        <div className="jA1mTx">
                                            <div className="SarUkj shopee-image-container">
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                            <div className="thumbnail-selected-mask" />
                                        </div>
                                    </div>
                                    <div className="UBG7wZ">
                                        <div className="jA1mTx">
                                            <div className="SarUkj shopee-image-container">
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                            <div className="thumbnail-selected-mask" />
                                        </div>
                                    </div>
                                    <div className="UBG7wZ">
                                        <div className="jA1mTx">
                                            <div className="SarUkj shopee-image-container">
                                                <picture>
                                                    <img
                                                        className="IMAW1w"
                                                        src={`${AppUrl.ImageUrl}/images/products/${product.image}`}
                                                        alt={
                                                            product.name ||
                                                            "Product Image"
                                                        } // Thêm thuộc tính alt cho SEO và truy cập tốt hơn
                                                    />
                                                </picture>
                                            </div>
                                            <div className="thumbnail-selected-mask" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-center items-center"
                                style={{ marginTop: 15 }}
                            >
                                <div className="flex items-center idmlsn">
                                    <div className="rhG6k7">Chia sẻ:</div>
                                    <button
                                        className="sprite-product-sharing sprite-product-sharing-fm Vo8Ebs"
                                        aria-label="Share on Messenger"
                                    />
                                    <button
                                        className="sprite-product-sharing sprite-product-sharing-fb Vo8Ebs"
                                        aria-label="Share on Facebook"
                                    />
                                    <button
                                        className="sprite-product-sharing sprite-product-sharing-pinterest Vo8Ebs"
                                        aria-label="Share on Pinterest"
                                    />
                                    <button
                                        className="sprite-product-sharing sprite-product-sharing-twitter Vo8Ebs"
                                        aria-label="Share on Twitter"
                                    />
                                </div>
                                <div className="flex items-center feDSnr">
                                    <button className="w2JMKY" tabIndex={0}>
                                        <svg
                                            width={24}
                                            height={20}
                                            className="vgMiJB"
                                        >
                                            <path
                                                d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                stroke="#FF424F"
                                                strokeWidth="1.5"
                                                fill="none"
                                                fillRule="evenodd"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="rhG6k7">
                                            Đã thích (4k)
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-auto i9t0tr">
                            <h2 className="Bf9ap6">
                                Product Information Section
                            </h2>
                            <div className="flex-auto flex-column  DXQgih">
                                <div className="WBVL_7">
                                    <div className="ZUZ1FO vRzNCn IM_tEy _wgU9F Jwsdcs items-center">
                                        Yêu thích
                                    </div>
                                    <span>{product.product_name}</span>
                                </div>
                                <div className="flex asFzUa">
                                    <button className="flex e2p50f">
                                        <div className="F9RHbS dQEiAI">
                                            {product.rating}
                                        </div>
                                        <div className="x1i_He">
                                            <div className="T1549_">
                                                {[...Array(rating)].map(
                                                    (_, i) => (
                                                        <div
                                                            key={i}
                                                            className="sAOZ6s"
                                                        >
                                                            <div
                                                                className="ZDu7mK"
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                            >
                                                                <div className="R6CPBG" />
                                                            </div>
                                                            <div className="VAir_o" />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                    <button className="flex e2p50f">
                                        <div className="F9RHbS">
                                            {reviewCount !== null
                                                ? `${reviewCount}` // Hiển thị số lượng đánh giá
                                                : "Đang tải..."}
                                        </div>
                                        <div className="x1i_He">đánh giá</div>
                                    </button>
                                    <div className="flex mnzVGI" tabIndex={0}>
                                        <div className="AcmPRb">
                                            {product.product_stock}
                                        </div>
                                        <div className="aleSBU">đã bán</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 10 }}>
                                    <div className="flex flex-column">
                                        <div className="flex flex-column CWiSMQ">
                                            <section
                                                className="flex items-center"
                                                aria-live="polite"
                                            >
                                                <h2 className="Bf9ap6">
                                                    Price Section
                                                </h2>
                                                <div className="flex items-center QAc7_y">
                                                    <div className="qg2n76">
                                                        {formatVND(
                                                            product.price
                                                        )}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div className="G27FPf">
                                                            {formatVND(
                                                                product.price -
                                                                    (product.price *
                                                                        product.discount) /
                                                                        100
                                                            )}
                                                        </div>
                                                        <div className="o_z7q9">
                                                            {product.discount}%
                                                            giảm
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="at_ZtL">
                                    <div className="flex flex-column">
                                        <section className="yjMlzR">
                                            <h3 className="OGxzJN">
                                                Chính sách Trả hàng
                                            </h3>
                                            <div className="o8k8S4">
                                                <img
                                                    alt=""
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b69402e4275f823f7d47.svg"
                                                    className="ikrz0A"
                                                />
                                                <div className="Q8e31z">
                                                    Trả hàng 15 ngày
                                                </div>
                                                <div className="w8_Dsz">
                                                    Đổi ý miễn phí
                                                </div>
                                                <div
                                                    className="shopee-drawer"
                                                    id="pc-drawer-id-0"
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        alt="icon help"
                                                        className="gdYMVU"
                                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                                                    />
                                                </div>
                                            </div>
                                        </section>
                                        <section className="flex KIoPj6 uVwYBh">
                                            <h3 className="Dagtcd">
                                                Vận chuyển
                                            </h3>
                                            <div className="CWIkAx oqSQTf">
                                                <div className="flex">
                                                    <div className="y5xqvT">
                                                        <img
                                                            alt="icon service by shopee"
                                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/3e0adc366a3964f4fb59.svg"
                                                        />
                                                        <div className="iDZfa6">
                                                            Xử lý đơn hàng bởi
                                                            Shopee
                                                        </div>
                                                        <div
                                                            className="shopee-drawer"
                                                            id="pc-drawer-id-1"
                                                            tabIndex={0}
                                                        >
                                                            <img
                                                                alt="icon help"
                                                                className="gdYMVU"
                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wigEZ0">
                                                    <img
                                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                                                        height={20}
                                                        className="Fy4A_Q"
                                                        alt=""
                                                    />
                                                    <div className="ohuenU">
                                                        <div className="nDYwZC">
                                                            <div>
                                                                Miễn phí vận
                                                                chuyển
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="H5IRYN">
                                                        <img
                                                            alt="icon shipped overseas"
                                                            className="fBlHLU"
                                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7b101a24cfe44d8eb45f.svg"
                                                        />
                                                    </div>
                                                    <div className="flex flex-column JLop8B">
                                                        <div className="flex items-center C0ngbq">
                                                            <div className="Zg6PS1">
                                                                Vận chuyển từ
                                                            </div>
                                                            <div className="flex items-center oTmzEO">
                                                                <div className="mMlgVz">
                                                                    {" "}
                                                                    Nước ngoài
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <div className="PddMlc">
                                                                        tới
                                                                    </div>
                                                                    <div className="my0ZcO">
                                                                        <button className="flex items-center">
                                                                            <span className="awxJLd">
                                                                                Xã
                                                                                Bình
                                                                                Tú,
                                                                                Huyện
                                                                                Thăng
                                                                                Bình
                                                                            </span>
                                                                            <img
                                                                                alt="icon arrow down"
                                                                                className="RhLDj0"
                                                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="BWGW5I">
                                                            <div className="Zg6PS1">
                                                                phí vận chuyển
                                                            </div>
                                                            <div>
                                                                <div
                                                                    className="shopee-drawer"
                                                                    id="pc-drawer-id-2"
                                                                    tabIndex={0}
                                                                >
                                                                    <div className="flex items-center PZGOkt">
                                                                        ₫0
                                                                        <img
                                                                            alt="icon arrow down"
                                                                            className="eTGwg9"
                                                                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div className="flex KIoPj6 W5LiQM">
                                            <div className="flex flex-column">
                                                <section className="flex items-center OaFP0p">
                                                    <h3 className="Dagtcd">
                                                        Số lượng
                                                    </h3>
                                                    <div className="flex items-center">
                                                        <div
                                                            style={{
                                                                marginRight: 15,
                                                            }}
                                                        >
                                                            <div className="_9m0o30 shopee-input-quantity">
                                                                <button
                                                                    aria-label="Decrease"
                                                                    className="suQW3X"
                                                                    onClick={
                                                                        handleDecrease
                                                                    }
                                                                >
                                                                    <svg
                                                                        enableBackground="new 0 0 10 10"
                                                                        viewBox="0 0 10 10"
                                                                        x={0}
                                                                        y={0}
                                                                        className="shopee-svg-icon"
                                                                    >
                                                                        <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                                                    </svg>
                                                                </button>
                                                                <input
                                                                    className="suQW3X u00pLG"
                                                                    type="text"
                                                                    role="spinbutton"
                                                                    aria-live="assertive"
                                                                    aria-valuenow={
                                                                        quantity
                                                                    }
                                                                    value={
                                                                        quantity
                                                                    }
                                                                    readOnly
                                                                />
                                                                <span
                                                                    aria-live="polite"
                                                                    className="Bf9ap6"
                                                                >
                                                                    Số lượng{" "}
                                                                    {quantity}
                                                                </span>
                                                                <button
                                                                    aria-label="Increase"
                                                                    className="suQW3X"
                                                                    onClick={
                                                                        handleIncrease
                                                                    }
                                                                >
                                                                    <svg
                                                                        enableBackground="new 0 0 10 10"
                                                                        viewBox="0 0 10 10"
                                                                        x={0}
                                                                        y={0}
                                                                        className="shopee-svg-icon icon-plus-sign"
                                                                    >
                                                                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {
                                                                product.product_stock
                                                            }{" "}
                                                            sản phẩm có sẵn
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <div className="fnrLi4 high-button-section">
                                        <div className="bwPwYa high-end-button-group">
                                            <button
                                                onClick={handleAddToCart}
                                                type="button"
                                                className="btn btn-tinted btn--l YuENex a_JvBi"
                                                aria-disabled="false"
                                            >
                                                <img
                                                    alt="icon-add-to-cart"
                                                    className="_kL9Hf"
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                                                />
                                                <span>thêm vào giỏ hàng</span>
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-solid-primary btn--l YuENex"
                                                aria-disabled="false"
                                                onClick={handleBuyNow}
                                            >
                                                Mua ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: 30,
                                        borderTop:
                                            "1px solid rgba(0, 0, 0, 0.05)",
                                    }}
                                >
                                    <div className="gIL8h3">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://shopee.vn/m/shopee-dam-bao"
                                            className="kz1LRx"
                                        >
                                            <img
                                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/83e10a1f95cb083579c0.png"
                                                className="Kdpve_"
                                                alt=""
                                            />
                                            <span className="lji0M1">
                                                Shopee Đảm Bảo
                                            </span>
                                            <span className="u83Maa">
                                                Trả hàng miễn phí 15 ngày
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    <PageProductShop />
                    <div className="wAMdpk">
                        <div className="page-product__content">
                            <div className="page-product__content--left">
                                <div className="product-detail page-product__detail">
                                    <section className="I_DV_3">
                                        <h2 className="WjNdTR">
                                            CHI TIẾT SẢN PHẨM
                                        </h2>
                                        <div className="Gf4Ro0">
                                            <div className="Tq1nbH">
                                                <label className="cyMNDG">
                                                    Kho
                                                </label>
                                                <div>
                                                    {product.product_stock}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="I_DV_3">
                                        <h2 className="WjNdTR">
                                            MÔ TẢ SẢN PHẨM
                                        </h2>
                                        <div className="Gf4Ro0">
                                            <div className="e8lZp3">
                                                <p className="QN2lPu">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <ProductRating />
                                <div style={{ display: "contents" }}>
                                    <div className="shopee-header-section shopee-header-section--simple">
                                        <div className="shopee-header-section__header">
                                            <div className="shopee-header-section__header__title">
                                                <div>
                                                    Các sản phẩm của shop khác
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shopee-header-section__content" />
                                    </div>
                                    <div className="grid wide">
                                        <div className="QLiXDZ row sm-gutter">
                                            {relatedProducts.map((item) => (
                                                <Product
                                                    key={item.id}
                                                    product={item}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "contents" }}>
                                    <div className="shopee-header-section shopee-header-section--simple">
                                        <div className="shopee-header-section__header">
                                            <div className="shopee-header-section__header__title">
                                                <div>Có thể bạn cũng thích</div>
                                            </div>
                                        </div>
                                        <div className="shopee-header-section__content" />
                                    </div>
                                    <div className="grid wide">
                                        <div className="QLiXDZ row sm-gutter">
                                            {suggestedProducts.length > 0 ? (
                                                suggestedProducts.map(
                                                    (item) => (
                                                        <Product
                                                            key={item.id}
                                                            product={item}
                                                        />
                                                    )
                                                )
                                            ) : (
                                                <div>
                                                    Không có sản phẩm gợi ý
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="fppaNP"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                padding: "10px",
                                            }}
                                        >
                                            <a
                                                href="/daily_discover"
                                                className="custom-button"
                                            >
                                                Xem thêm
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-product__content--right">
                                <div style={{ display: "contents" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
