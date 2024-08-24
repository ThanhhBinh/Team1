import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppUrl from "../../api/AppURL";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../state/cartSlice";

export default function Banner() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const hasItems = items && items.length > 0;
    const userId = localStorage.getItem("user_id");
    const productCount = useSelector((state) => {
        const items = state.cart.items || [];
        const userId = localStorage.getItem("user_id");
        const userItems = items.filter((item) => item.user_id === userId);
        return Array.isArray(userItems) ? userItems.length : 0;
    });

    // Giả sử user_id được lưu trữ trong localStorage
    const userItems = items.filter((item) => item.user_id === userId);

    const handleRemoveFromCart = (productId) => {
        const item = userItems.find((item) => item.product_id === productId);
        if (item) {
            dispatch(
                removeFromCart({ product_id: productId, user_id: userId })
            );
        }
    };

    useEffect(() => {
        // Lấy lịch sử tìm kiếm từ localStorage khi component được tải
        const savedHistory = localStorage.getItem("searchHistory");
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim()) {
            setSearchHistory((prevHistory) => {
                const newHistory = [searchQuery.trim(), ...prevHistory];
                const uniqueHistory = Array.from(new Set(newHistory)).slice(
                    0,
                    10
                );

                localStorage.setItem(
                    "searchHistory",
                    JSON.stringify(uniqueHistory)
                );

                return uniqueHistory;
            });

            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            setShowHistory(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleHistoryClick = (query) => {
        setSearchQuery(query);
        handleSearch();
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setShowHistory(true);
    };

    return (
        <div className="header__contain">
            <label htmlFor="mobile-search" className="header__mobile-search">
                <i className="header__mobile-search-icon fas fa-search" />
            </label>
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img
                        alt="Logo"
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
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    {showHistory && searchHistory.length > 0 && (
                        <div className="header__search-history">
                            <ul className="header__search-history-list">
                                {searchHistory.map((item, index) => (
                                    <li
                                        key={index}
                                        className="header__search-history-item"
                                    >
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleHistoryClick(item);
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <button
                    className="btn header__search-btn"
                    onClick={handleSearch}
                >
                    <i className="header__search-btn-icon fas fa-search" />
                </button>
            </div>
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
                            {userItems.map((item) => (
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
                                href="\checkout"
                                className="btn btn--primary header__cart-see-cart"
                            >
                                Xem giỏ hàng
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="header__cart-list no-cart">
                        <img
                            alt="No Cart"
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
