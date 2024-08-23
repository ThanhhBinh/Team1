import React from "react";
import AppUrl from "../api/AppURL";

const ProductSale = ({ product }) => {
    const {
        product_id,
        image,
        product_name,
        discount = 0,
        price = 0,
        rating = 0,
        product_stock = 0,
    } = product;

    // Ensure `price`, `discount`, and `product_stock` are numbers
    const validPrice = typeof price === "number" ? price : 0;
    const validDiscount = typeof discount === "number" ? discount : 0;
    const validStock = typeof product_stock === "number" ? product_stock : 0;

    const currentPrice = validPrice * (1 - validDiscount / 100);

    return (
        <div className="sGJRNY neoRB5">
            <a
                aria-label={`${product_name} promotion off ${validDiscount}% current price ₫${currentPrice.toFixed(
                    0
                )} Đã bán ${validStock.toFixed(0)}`}
                href={`${AppUrl.ImageFE}/product/${product.product_id}`}
            >
                <div className="aFgbHI neoRB5">
                    <div className="HzCHw4">
                        <div className="X1fzry nUrrLq OTAK7n">
                            <div className="rZkzYG">
                                <div
                                    className="jjcGRu C_18Pl"
                                    style={{ color: "rgb(208, 1, 27)" }}
                                >
                                    <div className="WDX6cq">
                                        <span>Mall</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="By44ak aXY7Pt">
                            <div
                                className="aXY7Pt VWGjwi"
                                style={{
                                    backgroundImage: `url(${AppUrl.ImageUrl}/images/products/${image})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="sny52Q">
                    <div className="zs1fUu">
                        <div className="UeJ6lG">{product_name}</div>
                        <div className="fD85zn">
                            <div className="d6cl1K">
                                <div className="rUjRDX typo-r10">
                                    {[...Array(Math.floor(rating))].map(
                                        (_, i) => (
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
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="_t8Iel">
                            <div className="iVyZmn">
                                <div className="y1PVWz">
                                    <div className="I99cV_ hYuPX1 I9vX2T">
                                        <div className="Gt3dn4">
                                            <span className="ZnuQ4w hYuPX1 I9vX2T">
                                                ₫
                                            </span>
                                            <strong className="Rgk_yn">
                                                {validPrice.toFixed(0)}
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="hcYtZZ ph4Z1T">
                                        <div className="DCjeTh a4s1bT">
                                            <svg
                                                width={10}
                                                height={16}
                                                viewBox="0 0 10 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z"
                                                    fill="url(#paint0_linear_2216_10611)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_2216_10611"
                                                        x1={0}
                                                        y1={0}
                                                        x2={0}
                                                        y2={16}
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#EE4D2D" />
                                                        <stop
                                                            offset={1}
                                                            stopColor="#FF7337"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        -{validDiscount.toFixed(0)}%
                                    </div>
                                </div>
                                <div className="I99cV_ zbggAt I9vX2T">
                                    <div className="Gt3dn4">
                                        <span className="ZnuQ4w zbggAt I9vX2T">
                                            ₫
                                        </span>
                                        <strong
                                            className="Rgk_yn"
                                            style={{
                                                marginTop: "5px",
                                            }}
                                        >
                                            {currentPrice.toFixed(0)}
                                        </strong>
                                    </div>
                                </div>
                                <div className="VE_mfV">
                                    <div
                                        className="g0LhW7"
                                        style={{ height: 16 }}
                                    >
                                        <div className="Qeov7Y DqPl63">
                                            Đã bán {validStock.toFixed(0)}
                                        </div>
                                        <div
                                            className="gsxwEM"
                                            style={{
                                                width: `${
                                                    (validStock / 1000) * 100
                                                }%`,
                                                borderRadius: "8px 0px 0px 8px",
                                            }}
                                        />
                                        <div
                                            className="efwV9O"
                                            style={{ borderRadius: 8 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="r_gprR">
                                <div className="OB_WG4 NUjI4x epiqlJ _1NeKaL">
                                    Mua ngay
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProductSale;
