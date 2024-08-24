import React from "react";
import PropTypes from "prop-types";

const Paginate = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <ul className="pagination home-product-pagination">
            <li
                className={`pagination-item ${
                    currentPage === 1 ? "pagination-item--disable" : ""
                }`}
            >
                <a
                    href="#"
                    className="pagination-item-link"
                    onClick={() => handlePageClick(currentPage - 1)}
                    aria-label="Previous"
                >
                    <i className="fas fa-chevron-left" />
                </a>
            </li>
            {pages.map((page) => (
                <li
                    key={page}
                    className={`pagination-item ${
                        currentPage === page ? "pagination-item--active" : ""
                    }`}
                >
                    <a
                        href="#"
                        className="pagination-item-link"
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </a>
                </li>
            ))}
            <li
                className={`pagination-item ${
                    currentPage === totalPages ? "pagination-item--disable" : ""
                }`}
            >
                <a
                    href="#"
                    className="pagination-item-link"
                    onClick={() => handlePageClick(currentPage + 1)}
                    aria-label="Next"
                >
                    <i className="fas fa-chevron-right" />
                </a>
            </li>
        </ul>
    );
};

Paginate.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Paginate;
