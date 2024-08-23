import React from "react";
import AppUrl from "../api/AppURL";
const Product = ({ product }) => {
    // Kiểm tra thông tin sản phẩm
    if (
        !product ||
        !product.product_id ||
        !product.image ||
        !product.product_name
    ) {
        return <p>Thông tin sản phẩm không đầy đủ</p>;
    }

    // Kiểm tra và xử lý giá trị của rating
    const rating = Number.isFinite(product.rating)
        ? Math.max(0, Math.min(5, Math.floor(product.rating)))
        : 0;

    // Đảm bảo giá trị sản phẩm hợp lệ
    const price = Number.isFinite(product.price) ? product.price : 0;
    const discount = Number.isFinite(product.discount) ? product.discount : 0;
    const finalPrice = Math.max(price - discount, 0); // Đảm bảo giá không âm

    // Định dạng giá theo chuẩn VND
    const formatVND = (value) => {
        return value.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };

    return (
        <div className="col l-2 m-3 c-6 home-product-item">
            <a
                className="home-product-item-link"
                href={`${AppUrl.ImageFE}/product/${product.product_id}`}
            >
                <div
                    className="home-product-item__img"
                    style={{
                        backgroundImage: `url(${AppUrl.ImageUrl}/images/products/${product.image})`,
                    }}
                />
                <div className="home-product-item__info">
                    <h4 className="home-product-item__name">
                        {product.product_name}
                    </h4>
                    <div className="home-product-item__price">
                        {discount > 0 && (
                            <p className="home-product-item__price-old">
                                {formatVND(price)}
                            </p>
                        )}
                        <p className="home-product-item__price-new">
                            {formatVND(finalPrice)}
                        </p>
                        <i className="home-product-item__ship fas fa-shipping-fast" />
                    </div>
                    <div className="home-product-item__footer">
                        <div className="home-product-item__save">
                            <input
                                type="checkbox"
                                name="save-check"
                                id={`heart-save-${product.product_id}`}
                            />
                            <label
                                htmlFor={`heart-save-${product.product_id}`}
                                className="far fa-heart"
                            />
                        </div>
                        <div
                            className="home-product-item__rating-star"
                            style={{ color: "yellow" }}
                        >
                            {[...Array(rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 15 15"
                                    role="img"
                                    className="stardust-icon stardust-icon-rating-solid t7jHjH"
                                    style={{
                                        display: "inline-block",
                                        verticalAlign: "middle",
                                    }}
                                >
                                    <path
                                        d="m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={10}
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="home-product-item__origin">
                        Đã bán {product.product_stock}
                    </div>
                    <div className="home-product-item__favourite">
                        Yêu thích
                    </div>
                    {discount > 0 && (
                        <div className="home-product-item__sale-off">
                            <div className="home-product-item__sale-off-value">
                                {discount}%
                            </div>
                            <div className="home-product-item__sale-off-label">
                                GIẢM
                            </div>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
};

export default Product;
