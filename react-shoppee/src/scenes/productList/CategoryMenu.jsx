import React, { useState, useRef } from "react";

const CategoryMenu = ({
    onPriceRangeChange,
    onRatingChange,
    onResetFilters,
}) => {
    const checkboxesRef = useRef([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleResetClick = () => {
        // Bỏ chọn tất cả các checkbox
        checkboxesRef.current.forEach((checkbox) => {
            if (checkbox) checkbox.checked = false;
        });

        // Reset giá trị khoảng giá
        setMinPrice("");
        setMaxPrice("");

        // Gọi hàm onResetFilters để reset các bộ lọc trong state của component cha
        onResetFilters();
    };

    return (
        <nav className="category">
            <h3 className="category-heading">
                <i className="category-heading-icon fas fa-list-ul" />
                Bộ lọc tìm kiếm
            </h3>
            <div className="category-group">
                <div className="category-group-title">Khoảng Giá</div>
                <div className="category-group-filter">
                    <input
                        type="number"
                        name="min"
                        placeholder="đ TỪ"
                        className="category-group-filter-input"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <i className="fas fa-arrow-right" />
                    <input
                        type="number"
                        name="max"
                        placeholder="đ ĐẾN"
                        className="category-group-filter-input"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn--primary category-group-filter-btn"
                    onClick={() => onPriceRangeChange(minPrice, maxPrice)}
                >
                    Thêm khoảng giá
                </button>
            </div>
            <div className="category-group">
                <div className="category-group-title">Đánh Giá</div>
                <div className="rating-star">
                    <input
                        type="checkbox"
                        className="category-group-item-check"
                        onChange={() => onRatingChange(5)}
                        ref={(el) => (checkboxesRef.current[8] = el)}
                    />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                </div>
                <div className="rating-star">
                    <input
                        type="checkbox"
                        className="category-group-item-check"
                        onChange={() => onRatingChange(4)}
                        ref={(el) => (checkboxesRef.current[9] = el)}
                    />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-uncheck far fa-star" />
                </div>
                <div className="rating-star">
                    <input
                        type="checkbox"
                        className="category-group-item-check"
                        onChange={() => onRatingChange(3)}
                        ref={(el) => (checkboxesRef.current[10] = el)}
                    />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                </div>
                <div className="rating-star">
                    <input
                        type="checkbox"
                        className="category-group-item-check"
                        onChange={() => onRatingChange(2)}
                        ref={(el) => (checkboxesRef.current[11] = el)}
                    />
                    <i className="star-checked far fa-star" />
                    <i className="star-checked far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                </div>
                <div className="rating-star">
                    <input
                        type="checkbox"
                        className="category-group-item-check"
                        onChange={() => onRatingChange(1)}
                        ref={(el) => (checkboxesRef.current[12] = el)}
                    />
                    <i className="star-checked far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                    <i className="star-uncheck far fa-star" />
                </div>
            </div>
            <button
                className="btn btn--primary category-group-filter-btn category-group--margin"
                onClick={handleResetClick}
            >
                LÀM MỚI
            </button>
        </nav>
    );
};

export default CategoryMenu;
