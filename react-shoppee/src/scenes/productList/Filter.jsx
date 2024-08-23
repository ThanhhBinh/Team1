import React, { useState, useEffect } from "react";

export default function Filter({ onSortChange }) {
    const [sortOrder, setSortOrder] = useState("desc"); // "desc" hoặc "asc"
    const [sortType, setSortType] = useState("price"); // Loại sắp xếp: "price", "date", "sold"

    useEffect(() => {
        if (onSortChange) {
            onSortChange(sortType, sortOrder); // Gửi loại sắp xếp và thứ tự sắp xếp lên trên
        }
    }, [sortType, sortOrder, onSortChange]);

    const handleSortChange = (type, order) => {
        setSortType(type);
        setSortOrder(order);
    };

    return (
        <div className="home-filter hide-on-mobile-tablet">
            <div className="home-filter-control">
                <p className="home-filter-title">Sắp xếp theo</p>
                <button
                    className={`btn home-filter-btn ${
                        sortType === "date" && sortOrder === "desc"
                            ? "btn--primary"
                            : ""
                    }`}
                    onClick={() => handleSortChange("date", "desc")}
                >
                    Mới nhất
                </button>
                <button
                    className={`btn home-filter-btn ${
                        sortType === "sold" && sortOrder === "asc"
                            ? "btn--primary"
                            : ""
                    }`}
                    onClick={() => handleSortChange("sold", "asc")}
                >
                    Bán chạy
                </button>
                <div className="btn home-filter-sort">
                    <p className="home-filter-sort-btn">Giá</p>
                    <i className="fas fa-sort-amount-down-alt" />
                    <ul className="home-filter-sort-list">
                        <li>
                            <a
                                href="#"
                                className={`home-filter-sort-item-link ${
                                    sortType === "price" && sortOrder === "desc"
                                        ? "btn--primary"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleSortChange("price", "desc")
                                }
                            >
                                Giảm dần
                                <i className="fas fa-sort-amount-down-alt" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`home-filter-sort-item-link ${
                                    sortType === "price" && sortOrder === "asc"
                                        ? "btn--primary"
                                        : ""
                                }`}
                                onClick={() => handleSortChange("price", "asc")}
                            >
                                Tăng dần
                                <i className="fas fa-sort-amount-up-alt" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
