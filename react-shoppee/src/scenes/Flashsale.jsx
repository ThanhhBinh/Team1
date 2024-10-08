import React, { useState } from "react";
import Topflashsale from "./page/Flashsale/Topflashsale";
import Cheapflashsale from "./page/Flashsale/Cheapflashsale";
import Choiceflashsale from "./page/Flashsale/Choiceflashsale";
import Fashionflashsale from "./page/Flashsale/Fashionflashsale";
import Dealflashsale from "./page/Flashsale/Dealflashsale";
import Electronicflashsale from "./page/Flashsale/Electronicflashsale";

export default function Flashsale() {
    const [selectedCategory, setSelectedCategory] = useState("flash_sale");

    const renderProducts = () => {
        switch (selectedCategory) {
            case "flash_sale":
                return <Topflashsale />;
            case "cheap_flash_sale":
                return <Cheapflashsale />;
            case "choice_flash_sale":
                return <Choiceflashsale />;
            case "fashion_flash_sale":
                return <Fashionflashsale />;
            case "deal_flash_sale":
                return <Dealflashsale />;
            case "electronic_flash_sale":
                return <Electronicflashsale />;
            default:
                return <Topflashsale />;
        }
    };
    return (
        <div style={{ display: "contents" }}>
            <div className="HP2uG2">
                <div className="BCN8EB">
                    <div role="main" style={{ backgroundColor: "#fef6f5" }}>
                        <div className="ckthby vvLXhP">
                            <div className="HmKLZN D4AtDt">
                                <div
                                    className="ea0tDj"
                                    aria-label="title Flash Sales"
                                />
                                <div
                                    className="Y2LfUy sxIvTA"
                                    data-time={1723427999}
                                >
                                    Kết thúc trong
                                </div>
                                <div
                                    className="shopee-countdown-timer p0qnAB"
                                    aria-label="ending in 1 giờ 14 phút"
                                    tabIndex={0}
                                >
                                    <div className="shopee-countdown-timer__number">
                                        <div
                                            className="shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--hour"
                                            style={{
                                                animationDelay: "-391536s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.503 67.701"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.204 69.004"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 39.5 66.3"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.402 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--hour"
                                            style={{
                                                animationDelay: "-35136s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.503 67.701"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.204 69.004"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 39.5 66.3"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.402 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopee-countdown-timer__colon shopee-countdown-timer__colon--flashing-off">
                                        <div className="colon-dot__wrapper">
                                            <span className="colon-dot" />
                                        </div>
                                        <div className="colon-dot__wrapper">
                                            <span className="colon-dot" />
                                        </div>
                                    </div>
                                    <div className="shopee-countdown-timer__number">
                                        <div
                                            className="shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--minute"
                                            style={{
                                                animationDelay: "-3336s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--minute"
                                            style={{
                                                animationDelay: "-396s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.503 67.701"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.204 69.004"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 39.5 66.3"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.402 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopee-countdown-timer__colon shopee-countdown-timer__colon--flashing-off">
                                        <div className="colon-dot__wrapper">
                                            <span className="colon-dot" />
                                        </div>
                                        <div className="colon-dot__wrapper">
                                            <span className="colon-dot" />
                                        </div>
                                    </div>
                                    <div className="shopee-countdown-timer__number">
                                        <div
                                            className="shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--second"
                                            style={{
                                                animationDelay: "-46s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--second"
                                            style={{
                                                animationDelay: "-7s",
                                            }}
                                        >
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.503 67.701"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M5.501 67.701h14.4l16.4-26.1c4.512-7.165 6.676-12.531 7.115-17.896a25.743 25.743 0 0 0 .085-2.104c0-11.759-8.183-20.64-19.519-21.527a24.115 24.115 0 0 0-1.881-.073c-12.5 0-22.1 9.5-22.1 22 0 11.3 8.3 19.9 19.3 19.9.851 0 1.523-.089 2.777-.352a55.135 55.135 0 0 0 .223-.048l-16.8 26.2zm25.797-46.447a9.47 9.47 0 0 0-9.297-9.353 10.339 10.339 0 0 0-.503.013 9.524 9.524 0 0 0-9.197 9.487c0 5.4 4.1 9.6 9.4 9.6 2.785 0 5.25-1.09 6.985-2.886a9.421 9.421 0 0 0 2.615-6.614 10.005 10.005 0 0 0-.003-.247z"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.204 69.004"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M33.603 32.802a31.686 31.686 0 0 0 .79-.423c2.107-1.169 3.051-2.091 4.378-4.03a32.68 32.68 0 0 0 .032-.047c1.9-2.9 2.8-6.1 2.8-9.7 0-10.8-8.2-18.6-19.6-18.6-11.335 0-19.479 7.414-19.976 17.97a21.882 21.882 0 0 0-.024 1.03 17.926 17.926 0 0 0 1.016 6.155 13.457 13.457 0 0 0 6.884 7.645C4.606 35.049 1.434 38.971.389 44.62a24.628 24.628 0 0 0-.386 4.482c0 11.8 8.7 19.9 21.4 19.9a24.237 24.237 0 0 0 11.074-2.514c6.306-3.218 10.335-9.304 10.699-16.947a23.948 23.948 0 0 0 .027-1.139 20.81 20.81 0 0 0-.846-6.134c-1.294-4.206-4.073-7.299-8.337-9.278a20.642 20.642 0 0 0-.417-.188zm-11.9 6.1c4.9 0 9.1 4.2 9.1 9.3 0 5.1-4.1 9.2-9.2 9.2a9.644 9.644 0 0 1-5.269-1.484c-2.255-1.453-3.734-3.872-3.991-6.794a10.51 10.51 0 0 1-.04-.922 9.237 9.237 0 0 1 2.404-6.318c1.703-1.853 4.18-2.982 6.996-2.982zm.2-27.9c4.5 0 8.4 3.8 8.4 8.2 0 4.4-4 8.2-8.5 8.2-4.6 0-8.2-3.7-8.2-8.4a7.892 7.892 0 0 1 1.919-5.273c1.232-1.404 2.986-2.353 5.055-2.638a9.726 9.726 0 0 1 1.326-.089z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 39.5 66.3"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 11.6L0 66.3h13.3L39.5 0H.1v11.6h21.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43.402 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M38.501 0h-14.6l-16.6 26.2a87.112 87.112 0 0 0-2.841 4.806C1.956 35.606.636 39.352.184 43.098A25.786 25.786 0 0 0 .001 46.2c0 11.983 8.875 21.071 20.561 21.391a23.329 23.329 0 0 0 .639.009c12.3 0 22.2-9.9 22.2-22.2a20.356 20.356 0 0 0-5.04-13.557 17.916 17.916 0 0 0-13.46-6.143c-1.043 0-1.817.09-3.26.526a26.98 26.98 0 0 0-.24.074L38.501 0zm-7.326 44.352a9.309 9.309 0 0 0-9.274-8.052 10.442 10.442 0 0 0-.638.019A9.653 9.653 0 0 0 12.101 46a10.844 10.844 0 0 0 .031.817c.196 2.596 1.324 4.831 3.063 6.396a9.473 9.473 0 0 0 6.406 2.387c5.4 0 9.7-4.3 9.7-9.6a10.703 10.703 0 0 0-.126-1.648z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.8 67.6"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M15.2 11.6h22.3V0h-34v39.5h8.4a13.796 13.796 0 0 1 2.081-2.256A9.364 9.364 0 0 1 20.4 35c5.6 0 9.9 4.5 9.9 10.3 0 5.8-4.3 10.2-9.8 10.2a9.594 9.594 0 0 1-3.975-.775c-2.283-1.024-3.971-3.081-5.231-6.281a22.17 22.17 0 0 1-.094-.244L0 52.4a62.066 62.066 0 0 0 .565 1.425c1.46 3.548 2.682 5.38 4.659 7.484a37.124 37.124 0 0 0 .276.291 21.422 21.422 0 0 0 13.729 5.945 25.179 25.179 0 0 0 1.671.055 21.976 21.976 0 0 0 13.258-4.2c4.31-3.202 7.279-8.057 8.275-13.942A26.715 26.715 0 0 0 42.8 45c0-11.9-8.3-20.9-19.4-20.9a20.186 20.186 0 0 0-2.2.112c-1.856.203-3.576.691-5.716 1.57a41.606 41.606 0 0 0-.284.118V11.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.9 66.9"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M24.5 53.2v13.7h12.3V53.2h6.1v-11h-6.1V0H23.4L0 42.5v10.7h24.5zm0-11h-14l14-24.8v24.8z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 43 67"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M22.5 11L7.3 31.3l7.2 6.1c1.9-1.2 3.8-1.7 6.1-1.7a10.732 10.732 0 0 1 5.741 1.573c2.816 1.762 4.559 4.87 4.559 8.627a10.175 10.175 0 0 1-2.626 6.924A10.165 10.165 0 0 1 20.7 56.1c-4.086 0-7.199-2.156-8.584-5.887A12.3 12.3 0 0 1 11.5 47.8L0 48.2c.595 4.955 1.386 7.553 3.347 10.52a24.795 24.795 0 0 0 .053.08 19.859 19.859 0 0 0 13.535 8.466A24.541 24.541 0 0 0 21 67.6c11.745 0 20.628-8.083 22.012-19.459A25.999 25.999 0 0 0 43.2 45a22.484 22.484 0 0 0-2.049-9.694c-2.825-5.949-8.41-9.794-15.751-10.406L43.9 0H3.3v11h19.2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 42.3 67.703"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M21.6 56.403l12.5-18.3c5.081-7.491 7.492-12.684 8.063-17.877a22.986 22.986 0 0 0 .137-2.523A17.062 17.062 0 0 0 30.133 1.242 24.304 24.304 0 0 0 22.3.003a23.551 23.551 0 0 0-9.787 1.948C5.323 5.212 1.199 12.42 1.199 22.443a36.776 36.776 0 0 0 .001.26H13a70.067 70.067 0 0 1 .052-1.368c.118-2.398.351-3.497.948-5.032a7.181 7.181 0 0 1 5.187-4.431 9.74 9.74 0 0 1 2.313-.269c4.599 0 7.899 3.099 7.9 7.398a5.467 5.467 0 0 1 0 .002 11.162 11.162 0 0 1-.092 1.496c-.29 2.167-1.352 4.335-4.331 9.011a261.731 261.731 0 0 1-1.677 2.593L0 67.703h40.5v-11.3H21.6z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 25 68.1"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M12.1 18.4v49.7H25V0L0 13v11.9l12.1-6.5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="shopee-countdown-timer__number__item">
                                                <svg
                                                    viewBox="0 0 41.701 69.001"
                                                    role="img"
                                                    className="stardust-icon stardust-icon-zoom"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeWidth=".945"
                                                        d="M.001 23.201v21.3a86.087 86.087 0 0 0 .141 5.239c.24 3.911.8 6.807 1.788 9.131a13.986 13.986 0 0 0 3.071 4.53c3.183 3.183 8.009 5.116 13.716 5.52a32.308 32.308 0 0 0 2.284.08 27.934 27.934 0 0 0 6.391-.693c2.999-.704 5.593-1.942 7.767-3.697a17.608 17.608 0 0 0 1.042-.91 16.219 16.219 0 0 0 4.725-8.397c.365-1.533.594-3.225.702-5.11a47.264 47.264 0 0 0 .073-2.693v-25.9c0-4.153-.458-7.389-1.5-10.073a15.929 15.929 0 0 0-4.5-6.327A20.063 20.063 0 0 0 26.805.689a27.077 27.077 0 0 0-6.204-.688c-6.7 0-12.5 2.2-16.1 6.2C1.536 9.443.202 13.886.022 21.359a76.328 76.328 0 0 0-.021 1.842zm29.1-.6v23.2a49.403 49.403 0 0 1-.043 2.168c-.07 1.589-.23 2.783-.497 3.768a8.197 8.197 0 0 1-.86 2.064 7.193 7.193 0 0 1-3.81 2.919 8.858 8.858 0 0 1-2.89.481 8.941 8.941 0 0 1-5.066-1.538 6.167 6.167 0 0 1-1.634-1.662 8.307 8.307 0 0 1-.297-.421c-.937-1.425-1.103-2.85-1.103-7.679v-22.7c0-2.681.162-4.465.54-5.847a8.234 8.234 0 0 1 .86-2.053c1.2-2.1 3.7-3.3 6.7-3.3a9.192 9.192 0 0 1 3.315.591 7.04 7.04 0 0 1 2.785 1.909 6.754 6.754 0 0 1 1.558 2.985c.316 1.252.442 2.856.442 5.115z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="Contain w_NNLa"
                            style={{
                                backgroundImage:
                                    'url("https://down-vn.img.susercontent.com/file/vn-11134004-7r98o-lyte6pvxy6jl15")',
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "1200px",
                            }}
                        />
                        <div>
                            <div
                                className="Z_qECr Contain"
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "1200px",
                                }}
                            >
                                <div className="image-carousel">
                                    <div className="image-carousel__item-list-wrapper">
                                        <ul
                                            className="image-carousel__item-list"
                                            style={{
                                                width: "100%",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <li
                                                className="image-carousel__item"
                                                style={{
                                                    padding: 0,
                                                    width: "20%",
                                                }}
                                            >
                                                <div
                                                    data-promotionid={
                                                        35091976359938
                                                    }
                                                >
                                                    <a
                                                        className="o4H6Ui zhcDy_"
                                                        href="/flash_sale?promotionId=35091976359938"
                                                    >
                                                        <div
                                                            className="my4eAL"
                                                            data-promotionid={
                                                                35091976359938
                                                            }
                                                        >
                                                            02:00
                                                        </div>
                                                        <div
                                                            className="D0ox6e"
                                                            data-promotionid={
                                                                35091976359938
                                                            }
                                                        >
                                                            Đang diễn ra
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li
                                                className="image-carousel__item"
                                                style={{
                                                    padding: 0,
                                                    width: "20%",
                                                }}
                                            >
                                                <div
                                                    data-promotionid={
                                                        35092232212480
                                                    }
                                                >
                                                    <a
                                                        className="o4H6Ui"
                                                        href="/flash_sale?promotionId=35092232212480"
                                                    >
                                                        <div
                                                            className="my4eAL"
                                                            data-promotionid={
                                                                35092232212480
                                                            }
                                                        >
                                                            09:00
                                                        </div>
                                                        <div
                                                            className="D0ox6e"
                                                            data-promotionid={
                                                                35092232212480
                                                            }
                                                        >
                                                            Sắp diễn ra
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li
                                                className="image-carousel__item"
                                                style={{
                                                    padding: 0,
                                                    width: "20%",
                                                }}
                                            >
                                                <div
                                                    data-promotionid={
                                                        32249962102784
                                                    }
                                                >
                                                    <a
                                                        className="o4H6Ui"
                                                        href="/flash_sale?promotionId=32249962102784"
                                                    >
                                                        <div
                                                            className="my4eAL"
                                                            data-promotionid={
                                                                32249962102784
                                                            }
                                                        >
                                                            12:00
                                                        </div>
                                                        <div
                                                            className="D0ox6e"
                                                            data-promotionid={
                                                                32249962102784
                                                            }
                                                        >
                                                            Sắp diễn ra
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li
                                                className="image-carousel__item"
                                                style={{
                                                    padding: 0,
                                                    width: "20%",
                                                }}
                                            >
                                                <div
                                                    data-promotionid={
                                                        35092794249216
                                                    }
                                                >
                                                    <a
                                                        className="o4H6Ui"
                                                        href="/flash_sale?promotionId=35092794249216"
                                                    >
                                                        <div
                                                            className="my4eAL"
                                                            data-promotionid={
                                                                35092794249216
                                                            }
                                                        >
                                                            15:00
                                                        </div>
                                                        <div
                                                            className="D0ox6e"
                                                            data-promotionid={
                                                                35092794249216
                                                            }
                                                        >
                                                            Sắp diễn ra
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li
                                                className="image-carousel__item"
                                                style={{
                                                    padding: 0,
                                                    width: "20%",
                                                }}
                                            >
                                                <div
                                                    data-promotionid={
                                                        35092982992896
                                                    }
                                                >
                                                    <a
                                                        className="o4H6Ui"
                                                        href="/flash_sale?promotionId=35092982992896"
                                                    >
                                                        <div
                                                            className="my4eAL"
                                                            data-promotionid={
                                                                35092982992896
                                                            }
                                                        >
                                                            17:00
                                                        </div>
                                                        <div
                                                            className="D0ox6e"
                                                            data-promotionid={
                                                                35092982992896
                                                            }
                                                        >
                                                            Sắp diễn ra
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="carousel-arrow carousel-arrow--prev carousel-arrow--hidden"
                                        role="button"
                                        tabIndex={0}
                                        style={{
                                            opacity: 1,
                                            visibility: "hidden",
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 13 20"
                                            width={13}
                                            height={22}
                                            className="shopee-svg-icon icon-arrow-left-bold-round"
                                        >
                                            <path
                                                d="M11 2l-9.2832 9L11 20"
                                                strokeWidth={3}
                                                fill="none"
                                                fillRule="evenodd"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="carousel-arrow carousel-arrow--next carousel-arrow--hidden"
                                        role="button"
                                        tabIndex={0}
                                        style={{
                                            opacity: 1,
                                            visibility: "hidden",
                                        }}
                                    >
                                        <svg
                                            viewBox="0 0 13 20"
                                            width={13}
                                            height={22}
                                            className="shopee-svg-icon icon-arrow-right-bold-round"
                                        >
                                            <path
                                                d="M2 2l9.2832 9L2 20"
                                                strokeWidth={3}
                                                fill="none"
                                                fillRule="evenodd"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-flash-sale__main">
                            <div className="navbar-with-more-menu">
                                <div
                                    className="Contain navbar-with-more-menu__wrapper"
                                    style={{
                                        backgroundColor: "rgb(255, 255, 255)",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        width: "1200px",
                                    }}
                                >
                                    <div
                                        className="navbar-with-more-menu__items"
                                        style={{
                                            height: "68px",
                                        }}
                                    >
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "flash_sale"
                                                )
                                            }
                                        >
                                            Top sản phẩm nổi bật
                                        </span>
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "cheap_flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "cheap_flash_sale"
                                                )
                                            }
                                        >
                                            SHOPEE SIÊU RẺ
                                        </span>
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "choice_flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "choice_flash_sale"
                                                )
                                            }
                                        >
                                            SHOPEE CHOICE
                                        </span>
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "fashion_flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "fashion_flash_sale"
                                                )
                                            }
                                        >
                                            QUẦN ÁO THỜI TRANG
                                        </span>
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "deal_flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "deal_flash_sale"
                                                )
                                            }
                                        >
                                            DEAL GIÁ SỐC
                                        </span>
                                        <span
                                            className={`navbar-with-more-menu__item ${
                                                selectedCategory ===
                                                "electronic_flash_sale"
                                                    ? "navbar-with-more-menu__item--active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setSelectedCategory(
                                                    "electronic_flash_sale"
                                                )
                                            }
                                        >
                                            THIẾT BỊ ĐIỆN TỬ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="V6A28M" style={{}}>
                                    {renderProducts()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
