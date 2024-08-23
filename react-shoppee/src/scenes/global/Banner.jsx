import React from "react";
import AppUrl from "../../api/AppURL";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../state/cartSlice";

export default function Banner() {
    const productCount = useSelector((state) => {
        const items = state.cart.items || [];
        return Array.isArray(items) ? items.length : 0;
    });
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const hasItems = items && items.length > 0;

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart({ product_id: productId }));
    };
    return (
        <div className="header__contain">
            <label htmlFor="mobile-search" className="header__mobile-search">
                <i className="header__mobile-search-icon fas fa-search" />
            </label>
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img
                        alt=""
                        src={`${AppUrl.ImageFE}/assets/img/logo/logo-full-white.png`}
                        className="header__logo-img"
                    />
                </a>
            </div>
            <input
                type="checkbox"
                id="mobile-search"
                className="header__search-check"
                hidden
            />
            <div className="header__search">
                <div className="header__search-input-wrap">
                    <input
                        type="text"
                        className="header__search-input"
                        placeholder="Tìm kiếm trên Shoppee"
                    />
                    <div className="header__search-history">
                        <ul className="header__search-history-list">
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Combo 30 điểm đại học khối A
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Combo 30 điểm đại học khối D
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Mỹ phẩm cho người yêu
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Bí kíp tán crush auto đổ
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Iphone 13 Pro Max giá rẻ
                                </a>
                            </li>
                            <li className="header__search-history-item">
                                <a href="https://example.com">
                                    Người yêu đẹp trai như LTP
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn header__search-btn">
                    <i className="header__search-btn-icon fas fa-search" />
                </button>
            </div>
            {/* header__cart--no-cart */}
            {/* header__cart--has-cart */}
            <div className="header__cart header__cart--has-cart">
                <a href={`${AppUrl.ImageFE}/checkout`}>
                    <i className="header__cart-icon fas fa-shopping-cart" />
                </a>
                <div className="header__cart-count">{productCount}</div>
                {hasItems ? (
                    <div className="header__cart-list has-cart">
                        <h4 className="header__cart-heading">
                            Sản phẩm đã chọn
                        </h4>
                        <ul className="header__cart-list-item">
                            {items.map((item) => (
                                <li
                                    key={item.product_id}
                                    className="header__cart-item"
                                >
                                    <img
                                        alt={item.product_name}
                                        src={`http://localhost:8000/images/products/${item.image}`}
                                        className="header__cart-item-img"
                                    />
                                    <div className="header__cart-item-info">
                                        <div className="header__cart-item-heading">
                                            <h3 className="header__cart-item-name">
                                                {item.product_name}
                                            </h3>
                                            <p className="header__cart-item-price">
                                                {(
                                                    item.price - item.discount
                                                ).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="header__cart-item-body">
                                            <p className="header__cart-item-number">
                                                x {item.count}
                                            </p>
                                            <div
                                                className="header__cart-item-close"
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        item.product_id
                                                    )
                                                }
                                            >
                                                Xoá
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="header__cart-footer">
                            <a
                                href="checkout"
                                className="btn btn--primary header__cart-see-cart"
                            >
                                Xem giỏ hàng
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="header__cart-list no-cart">
                        <img
                            alt=""
                            src={`${AppUrl.ImageFE}/assets/img/sp/no-cart.png`}
                            className="header__no-cart-img"
                        />
                        <p className="header__no-cart-text">Chưa có sản phẩm</p>
                    </div>
                )}
            </div>
        </div>
    );
}
