import React from "react";

const CategoryMenu = ({
    onPriceRangeChange,
    onRatingChange,
    onResetFilters,
}) => {
    return (
        <nav className="category">
            <h3 className="category-heading">
                <i className="category-heading-icon fas fa-list-ul" />
                Bộ lọc tìm kiếm
            </h3>
            <div className="category-group">
                <div className="category-group-title">Theo Danh Mục</div>
                <ul className="category-group-list">
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Thiết bị mạng
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Chuột và bàn phím
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        USB
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Linh kiện máy tính
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Wifi
                    </li>
                </ul>
            </div>
            <div className="category-group">
                <div className="category-group-title">Thương Hiệu</div>
                <ul className="category-group-list">
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Kingston
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Sandisk
                    </li>
                    <li className="category-group-item">
                        <input
                            type="checkbox"
                            className="category-group-item-check"
                        />
                        Seagate
                    </li>
                </ul>
            </div>
            <div className="category-group">
                <div className="category-group-title">Khoảng Giá</div>
                <div className="category-group-filter">
                    <input
                        type="number"
                        name="min"
                        placeholder="đ TỪ"
                        className="category-group-filter-input"
                    />
                    <i className="fas fa-arrow-right" />
                    <input
                        type="number"
                        name="max"
                        placeholder="đ ĐẾN"
                        className="category-group-filter-input"
                    />
                </div>
                <button
                    className="btn btn--primary category-group-filter-btn"
                    onClick={onPriceRangeChange}
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
                onClick={onResetFilters}
            >
                LÀM MỚI
            </button>
        </nav>
    );
};

export default CategoryMenu;
