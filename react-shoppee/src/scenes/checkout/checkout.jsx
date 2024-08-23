import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    increaseCount,
    decreaseCount,
    updateCount,
} from "../../state/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const navigate = useNavigate(); // Hook để điều hướng

    // Kiểm tra xem items có phải là mảng và không rỗng không
    if (!Array.isArray(items)) {
        return <div>Giỏ hàng không hợp lệ</div>;
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart({ product_id: productId }));
    };

    const handleIncreaseCount = (productId) => {
        dispatch(increaseCount({ product_id: productId }));
    };

    const handleDecreaseCount = (productId) => {
        dispatch(decreaseCount({ product_id: productId }));
    };

    const handleUpdateCount = (productId, count) => {
        if (count < 1) return; // Không cho phép số lượng âm hoặc bằng 0
        dispatch(updateCount({ product_id: productId, count }));
    };
    const calculateTotalPrice = () => {
        return items.reduce(
            (total, item) => total + (item.price - item.discount) * item.count,
            0
        );
    };
    const handleCheckout = () => {
        navigate("/confirmation"); // Điều hướng tới trang thanh toán
    };
    return (
        <div className="ctmsNd">
            <div>
                <div className="a11y-hidden" aria-live="polite" />
                <h1 className="a11y-hidden">Giỏ hàng</h1>
                <section className="cart-page-header-wrapper container-wrapper">
                    <div className="container">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <div className="cart-page-header">
                                <a className="cart-page-logo" href="/">
                                    <div />
                                    <svg
                                        viewBox="0 0 192 65"
                                        className="shopee-svg-icon icon-shopee-logo"
                                    >
                                        <g fillRule="evenodd">
                                            <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459" />
                                        </g>
                                    </svg>
                                    <div className="cart-page-logo__page-name">
                                        Giỏ hàng
                                    </div>
                                </a>
                            </div>
                            <div className="cart-page-searchbar">
                                <form
                                    role="search"
                                    autoComplete="off"
                                    className="shopee-searchbar"
                                >
                                    <div className="shopee-searchbar__main">
                                        <div className="shopee-searchbar-input">
                                            <input
                                                aria-label="SALE QUỐC TẾ"
                                                className="shopee-searchbar-input__input"
                                                maxLength={128}
                                                placeholder="SALE QUỐC TẾ"
                                                autoComplete="off"
                                                aria-autocomplete="list"
                                                aria-controls="shopee-searchbar-listbox"
                                                aria-expanded="false"
                                                role="combobox"
                                                defaultValue
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"
                                    >
                                        <svg
                                            height={19}
                                            viewBox="0 0 19 19"
                                            width={19}
                                            className="shopee-svg-icon"
                                        >
                                            <g
                                                fillRule="evenodd"
                                                stroke="none"
                                                strokeWidth={1}
                                            >
                                                <g transform="translate(-1016 -32)">
                                                    <g>
                                                        <g transform="translate(405 21)">
                                                            <g transform="translate(611 11)">
                                                                <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                                                                <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="tracking-impression-placeholder"
                    style={{
                        position: "fixed",
                        zIndex: 99999,
                        bottom: 0,
                        left: 0,
                    }}
                />
                <div className="container">
                    <main className="GO0LDV" style={{ marginBottom: 0 }}>
                        <h2 className="a11y-hidden">Product List Section</h2>
                        <div className="Za1N64">
                            <div className="SQGY8I">
                                <label className="stardust-checkbox">
                                    <input
                                        className="stardust-checkbox__input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select all products"
                                    />
                                    <div className="stardust-checkbox__box" />
                                </label>
                            </div>
                            <div className="jX4z5R">Sản Phẩm</div>
                            <div className="jHcdvj">Đơn Giá</div>
                            <div className="o1QlcH">Số Lượng</div>
                            <div className="RT5qRd">Số Tiền</div>
                            <div className="TkKRaF">Thao Tác</div>
                        </div>
                        {items.map((item) => (
                            <section className="AuhAvM" key={item.id}>
                                <h3 className="a11y-hidden">Shop Section</h3>
                                <div className="JsC6Oq">
                                    <div className="gzSvrb">
                                        <div className="Ll5dDW">
                                            <label className="stardust-checkbox">
                                                <input
                                                    className="stardust-checkbox__input"
                                                    type="checkbox"
                                                    aria-checked="false"
                                                    tabIndex={0}
                                                    role="checkbox"
                                                    aria-label="Click here to select all products in VIiSH.vn"
                                                />
                                                <div className="stardust-checkbox__box" />
                                            </label>
                                        </div>
                                        <a
                                            className="QcqMX5"
                                            href="/viish.vn?categoryId=100636&entryPoint=cart&itemId=29903616979"
                                        >
                                            <div className="Koi0Pw">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={62}
                                                    height={16}
                                                    fill="none"
                                                >
                                                    <title>
                                                        Preferred Seller
                                                    </title>
                                                    <path
                                                        fill="#EE4D2D"
                                                        fillRule="evenodd"
                                                        d="M0 2C0 .9.9 0 2 0h58a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                                                        clipRule="evenodd"
                                                    />
                                                    <g clipPath="url(#clip0)">
                                                        <path
                                                            fill="#fff"
                                                            d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <path
                                                                fill="#fff"
                                                                d="M0 0h55v16H0z"
                                                                transform="translate(4)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span
                                                style={{
                                                    marginLeft: 10,
                                                    fontSize: "15px",
                                                }}
                                            >
                                                VIiSH.vn
                                            </span>
                                        </a>
                                        <button className="Eg4UEE">
                                            <svg
                                                viewBox="0 0 16 16"
                                                className="shopee-svg-icon AxeMgG"
                                            >
                                                <g fillRule="evenodd">
                                                    <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                                </g>
                                            </svg>
                                        </button>
                                        <div className="cVlPY7" />
                                    </div>
                                </div>
                                <section className="RqMReY" role="list">
                                    <div className="_9G37m">
                                        <div className="wsVAKH">
                                            <span className="lKqYHD">
                                                Combo khuyến mãi
                                            </span>
                                            <span>
                                                Mua 2 sản phẩm giảm 1%, giảm đến
                                                2%
                                            </span>
                                            <span className="Vm8iNU">
                                                <a href="/bundle-deal/212953253609716?from=cart">
                                                    Thêm
                                                    <svg
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        width={12}
                                                        height={12}
                                                        color="#ee4d2d"
                                                        className="MuMxsb"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.293 6L4.146.854l.708-.708L10 5.293a1 1 0 010 1.414l-5.146 5.147-.708-.707L9.293 6z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>
                                        <div
                                            className="lDiGJB kEMRam"
                                            role="listitem"
                                        >
                                            <h4 className="a11y-hidden">
                                                cart_accessibility_item
                                            </h4>
                                            <div className="f1bSN6">
                                                <div className="Xp4RLg">
                                                    <label className="stardust-checkbox">
                                                        <input
                                                            className="stardust-checkbox__input"
                                                            type="checkbox"
                                                            aria-checked="false"
                                                            aria-disabled="false"
                                                            tabIndex={0}
                                                            role="checkbox"
                                                            aria-label="Click here to select this product"
                                                        />
                                                        <div className="stardust-checkbox__box" />
                                                    </label>
                                                </div>
                                                <div className="brf29Y">
                                                    <div className="bzhajK">
                                                        <a
                                                            title="Người Nổi Tiếng Mặt Tất Cả Mặt nạ 3D Mặt nạ Toàn Mặt nạ Mô Phỏng Mũ Đội Đầu Cho Người Hâm Mộ Ngộ nghĩnh Cosplay Mặt nạ 3D Balaclava"
                                                            href="/Người-Nổi-Tiếng-Mặt-Tất-Cả-Mặt-nạ-3D-Mặt-nạ-Toàn-Mặt-nạ-Mô-Phỏng-Mũ-Đội-Đầu-Cho-Người-Hâm-Mộ-Ngộ-nghĩnh-Cosplay-Mặt-nạ-3D-Balaclava-i.1063500851.29903616979?xptdk=232fe576-f62e-444a-b80f-0d8385e64b6e"
                                                        >
                                                            <img
                                                                className="jFEiVQ"
                                                                src={`http://localhost:8000/images/products/${item.image}`}
                                                                alt="product image"
                                                            />
                                                        </a>
                                                        <div className="Ou_0WX">
                                                            <a
                                                                className="c54pg1"
                                                                title="Người Nổi Tiếng Mặt Tất Cả Mặt nạ 3D Mặt nạ Toàn Mặt nạ Mô Phỏng Mũ Đội Đầu Cho Người Hâm Mộ Ngộ nghĩnh Cosplay Mặt nạ 3D Balaclava"
                                                                href="/Người-Nổi-Tiếng-Mặt-Tất-Cả-Mặt-nạ-3D-Mặt-nạ-Toàn-Mặt-nạ-Mô-Phỏng-Mũ-Đội-Đầu-Cho-Người-Hâm-Mộ-Ngộ-nghĩnh-Cosplay-Mặt-nạ-3D-Balaclava-i.1063500851.29903616979?xptdk=232fe576-f62e-444a-b80f-0d8385e64b6e"
                                                            >
                                                                {
                                                                    item.product_name
                                                                }
                                                            </a>
                                                            <div className="j_w5yD">
                                                                <span className="HrzuLB XyrmVS">
                                                                    Đổi ý miễn
                                                                    phí 15 ngày
                                                                </span>
                                                            </div>
                                                            <img
                                                                className="Kv1AvK"
                                                                src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxhaq518hlg993"
                                                                alt=""
                                                            />
                                                            <div className="gvFc9h" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="eHDC_o">
                                                    <div className="qNRZqG">
                                                        <button
                                                            className="mM4TZ8"
                                                            role="button"
                                                            tabIndex={0}
                                                        >
                                                            <div className="iIg1CN">
                                                                Phân loại hàng:
                                                                <div className="E33rwr" />
                                                            </div>
                                                            <div className="dDPSp3">
                                                                Kanye
                                                            </div>
                                                        </button>
                                                        <div />
                                                    </div>
                                                </div>
                                                <div className="gJyWia">
                                                    <div>
                                                        <span className="vjkBXu tnTSPU">
                                                            {item.price}đ
                                                        </span>
                                                        <span className="vjkBXu">
                                                            {(
                                                                item.price -
                                                                item.discount
                                                            ).toFixed(2)}
                                                            đ
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sluy3i">
                                                    <div className="GpmJtT shopee-input-quantity">
                                                        <button
                                                            className="WNSVcC"
                                                            aria-label="Decrease"
                                                            onClick={() =>
                                                                handleDecreaseCount(
                                                                    item.product_id
                                                                )
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
                                                            className="WNSVcC g2m9n4"
                                                            type="text"
                                                            role="spinbutton"
                                                            aria-valuenow={
                                                                item.count
                                                            }
                                                            value={item.count} // Thay đổi từ defaultValue thành value
                                                            onChange={(e) =>
                                                                handleUpdateCount(
                                                                    item.product_id,
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                        />
                                                        <button
                                                            className="WNSVcC"
                                                            aria-label="Increase"
                                                            onClick={() =>
                                                                handleIncreaseCount(
                                                                    item.product_id
                                                                )
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
                                                <div className="HRvCAv">
                                                    <span>
                                                        {(
                                                            (item.price -
                                                                item.discount) *
                                                            item.count
                                                        ).toFixed(2)}
                                                        đ
                                                    </span>
                                                    <span className="a11y-hidden">
                                                        Total price: ₫27.642
                                                    </span>
                                                </div>
                                                <div className="bRSn43 TvSDdG">
                                                    <button
                                                        className="lSrQtj"
                                                        onClick={() =>
                                                            handleRemoveFromCart(
                                                                item.product_id
                                                            )
                                                        }
                                                    >
                                                        Xóa
                                                    </button>
                                                    <div className="J8cCGR">
                                                        <button className="shopee-button-no-outline slfWNx">
                                                            <span className="wZrjgF">
                                                                Tìm sản phẩm
                                                                tương tự
                                                            </span>
                                                            <svg
                                                                enableBackground="new 0 0 15 15"
                                                                viewBox="0 0 15 15"
                                                                x={0}
                                                                y={0}
                                                                className="shopee-svg-icon f3N1Rf icon-down-arrow-filled"
                                                            >
                                                                <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="t89ViJ" />
                                    </div>
                                </section>
                                <div className="ArX7yj">
                                    <svg
                                        fill="none"
                                        viewBox="0 -2 23 22"
                                        className="shopee-svg-icon lGPe96 icon-voucher-line"
                                    >
                                        <g filter="url(#voucher-filter0_d)">
                                            <mask id="a" fill="#fff">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                                                />
                                            </mask>
                                            <path
                                                d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                                                mask="url(#a)"
                                            />
                                        </g>
                                        <path
                                            clipRule="evenodd"
                                            d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                                        />
                                        <defs>
                                            <filter
                                                id="voucher-filter0_d"
                                                x={0}
                                                y={1}
                                                width={20}
                                                height={16}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood
                                                    floodOpacity={0}
                                                    result="BackgroundImageFix"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation=".5" />
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                                <feBlend
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow"
                                                />
                                                <feBlend
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className="N9nCmB">
                                        <div className="nKTIzW">
                                            Voucher giảm đến ₫4k
                                        </div>
                                        <div className="JC72Dv">
                                            <button className="qe2YoR">
                                                Xem thêm voucher
                                            </button>
                                            <div
                                                style={{
                                                    display: "contents",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="_RPX38">
                                    <img
                                        width={24}
                                        height={20}
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/d9e992985b18d96aab90.png"
                                        alt="fs-icon"
                                    />
                                    <div className="Cmb29y">
                                        Giảm ₫300.000 phí vận chuyển đơn tối
                                        thiểu ₫0; Giảm ₫500.000 phí vận chuyển
                                        đơn tối thiểu ₫500.000
                                    </div>
                                    <div
                                        className="shopee-drawer"
                                        id="pc-drawer-id-0"
                                        tabIndex={0}
                                    >
                                        <span
                                            className="Eb1Wor"
                                            aria-describedby="1063500851_shipping_discount"
                                        >
                                            {" "}
                                            Tìm hiểu thêm{" "}
                                        </span>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </main>
                    <section className="yn6AIc">
                        <h2 className="a11y-hidden">
                            cart_accessibility_footer
                        </h2>
                        <div className="CzLyKQ lRHCcS">
                            <h3 className="a11y-hidden">
                                cart_accessibility_footer_voucher_row
                            </h3>
                            <svg
                                fill="none"
                                viewBox="0 -2 23 22"
                                className="shopee-svg-icon icon-voucher-line"
                            >
                                <g filter="url(#voucher-filter0_d)">
                                    <mask id="a" fill="#fff">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                                        />
                                    </mask>
                                    <path
                                        d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                                        mask="url(#a)"
                                    />
                                </g>
                                <path
                                    clipRule="evenodd"
                                    d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                                />
                                <defs>
                                    <filter
                                        id="voucher-filter0_d"
                                        x={0}
                                        y={1}
                                        width={20}
                                        height={16}
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood
                                            floodOpacity={0}
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation=".5" />
                                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <div className="FGs2jP">Shopee Voucher</div>
                            <div className="oI3JPG" />
                            <button className="nOoMrG">
                                Chọn hoặc nhập mã
                            </button>
                        </div>
                        <div className="Z6oxZ3 iDgxib" />
                        <h3 className="a11y-hidden">
                            cart_accessibility_footer_coin_row
                        </h3>
                        <div className="WuLbM9 BjTxuU">
                            <label className="stardust-checkbox stardust-checkbox--disabled">
                                <input
                                    className="stardust-checkbox__input"
                                    type="checkbox"
                                    aria-checked="false"
                                    aria-disabled="true"
                                    tabIndex={0}
                                    role="checkbox"
                                    aria-label="Coins Balance 0"
                                />
                                <div className="stardust-checkbox__box" />
                            </label>
                        </div>
                        <div className="WuLbM9 ificCM dOZlXw T5n8VV">
                            <svg
                                fill="none"
                                viewBox="0 0 18 18"
                                className="shopee-svg-icon Iz070x icon-coin-line"
                            >
                                <path
                                    stroke="#FFA600"
                                    strokeWidth="1.3"
                                    d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"
                                />
                                <path
                                    fill="#FFA600"
                                    fillRule="evenodd"
                                    stroke="#FFA600"
                                    strokeWidth=".2"
                                    d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="BBQR6_">Shopee Xu</div>
                            <div className="PkMsif">Bạn chưa chọn sản phẩm</div>
                            <div
                                className="stardust-popover Prdzh0"
                                id="stardust-popover0"
                                tabIndex={0}
                            >
                                <div
                                    role="button"
                                    className="stardust-popover__target"
                                >
                                    <div>
                                        <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon eXBxkv icon-help"
                                        >
                                            <g>
                                                <circle
                                                    cx="7.5"
                                                    cy="7.5"
                                                    fill="none"
                                                    r="6.5"
                                                    strokeMiterlimit={10}
                                                />
                                                <path
                                                    d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                                    stroke="none"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="WuLbM9 fDdBqs IR54W9">-₫0</div>
                        <div className="Z6oxZ3 MOZmZ1" />
                        <div className="WhvsrO Kk1Mak">
                            <h3 className="a11y-hidden">
                                cart_accessibility_footer_checkout_row
                            </h3>
                            <div className="u4pma8">
                                <label className="stardust-checkbox">
                                    <input
                                        className="stardust-checkbox__input"
                                        type="checkbox"
                                        aria-checked="false"
                                        aria-disabled="false"
                                        tabIndex={0}
                                        role="checkbox"
                                        aria-label="Click here to select all products"
                                    />
                                    <div className="stardust-checkbox__box" />
                                </label>
                            </div>
                            <button className="v5CBXg clear-btn-style">
                                Chọn Tất Cả (1)
                            </button>
                            <button className="clear-btn-style GQ7Hga">
                                Xóa
                            </button>
                            <div className />
                            <button className="clear-btn-style QmkEaL">
                                Lưu vào mục Đã thích
                            </button>
                            <div className="iqpIui" />
                            <div className="BV92a3" role="region">
                                <div className="DScaTh">
                                    <div className="znJ7TE">
                                        <div className="CoYXUV">
                                            Tổng thanh toán (0 Sản phẩm):
                                        </div>
                                        <div className="mketV9">
                                            ₫{calculateTotalPrice()}
                                        </div>
                                    </div>
                                </div>
                                <div className="unV7eM" />
                            </div>
                            <button
                                className="shopee-button-solid shopee-button-solid--primary"
                                onClick={handleCheckout}
                            >
                                <span className="SHq91i">Mua hàng</span>
                            </button>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <div className="s5z2oJ">
                        <div style={{ display: "contents" }}>
                            <div className="shopee-header-section shopee-header-section--simple">
                                <div className="shopee-header-section__header">
                                    <div className="shopee-header-section__header__title">
                                        <div>Có thể bạn cũng thích</div>
                                    </div>
                                    <a
                                        className="shopee-header-section__header-link"
                                        tabIndex={-1}
                                        href="/cart/recommend"
                                    >
                                        <button className="shopee-button-no-outline">
                                            Xem tất cả&nbsp;
                                            <svg
                                                enableBackground="new 0 0 11 11"
                                                viewBox="0 0 11 11"
                                                x={0}
                                                y={0}
                                                className="shopee-svg-icon icon-arrow-right"
                                            >
                                                <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                                <div className="shopee-header-section__content" />
                            </div>
                            <div className="QLiXDZ row">
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-Bi-Nước-Mực-Gel-Đen-Xanh-Đỏ-Khô-Nhanh-Ngòi-0.5mm-Mực-Đều-Nét-Chữ-Đẹp-Đủ-Màu-Trạm-Sinh-Viên.-(-BBN-)-i.1142636437.25253508799?sp_atk=42e12b42-e04e-4116-b25c-a130a0f7a743&xptdk=42e12b42-e04e-4116-b25c-a130a0f7a743"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp9kqhnsqtln27_tn.webp"
                                                        alt="Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ Màu - Trạm Sinh Viên. ( BBN )"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-50%" />
                                                        -50%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="w-5 h-5 stroke-none"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg")',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        Bút Bi Nước Mực Gel Đen
                                                        Xanh Đỏ Khô Nhanh Ngòi
                                                        0.5mm, Mực Đều, Nét Chữ
                                                        Đẹp Đủ Màu - Trạm Sinh
                                                        Viên. ( BBN )
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫1k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 282,4k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-mực-nước-bút-bi-văn-phòng-ngòi-viết-0.5mm-đều-nét-chữ-đủ-màu-NAMSHOP-i.713614081.25313455175?sp_atk=7877abe7-212d-46f0-b9ce-c44fcb6f3d41&xptdk=7877abe7-212d-46f0-b9ce-c44fcb6f3d41"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lryp13mzbvrt2e_tn.webp"
                                                        alt="Bút mực nước-bút bi văn phòng ngòi viết 0.5mm đều nét chữ đủ màu NAMSHOP"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="w-5 h-5 stroke-none"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg")',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/ef5ae19bc5ed8a733a70.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Bút mực nước-bút bi văn
                                                        phòng ngòi viết 0.5mm
                                                        đều nét chữ đủ màu
                                                        NAMSHOP
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫1k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 99,4k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Loa-bluetooth-đồng-hồ-báo-thức-Windoo-WD47-màn-hình-gương-loa-bluetooth-kết-hợp-đồng-hồ-đa-chức-năng-i.452249817.23357190012?sp_atk=cb30b8cc-f69d-4436-a8ea-e7e89eca8999&xptdk=cb30b8cc-f69d-4436-a8ea-e7e89eca8999"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmlv6zwjnp3z9e_tn.webp"
                                                        alt="Loa bluetooth đồng hồ báo thức Windoo WD47 màn hình gương, loa bluetooth kết hợp đồng hồ đa chức năng"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/f7b342784ff25c9e4403.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Loa bluetooth đồng hồ
                                                        báo thức Windoo WD47 màn
                                                        hình gương, loa
                                                        bluetooth kết hợp đồng
                                                        hồ đa chức năng
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫500k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1"
                                                            style={{
                                                                color: "rgb(246, 145, 19)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                #ShopXuHuong
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    15.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Tai-nghe-Bluetooth-KY8-trong-suốt-6-màu-Màn-Hình-Kỹ-Thuật-Số-Giảm-Tiếng-Ồn-Tích-Hợp-mic-i.186608798.24870068906?sp_atk=b610a338-1896-4ec6-8a2d-96f8b024f7fd&xptdk=b610a338-1896-4ec6-8a2d-96f8b024f7fd"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt4p5em9h138fa_tn.webp"
                                                        alt="Tai nghe Bluetooth KY8 trong suốt 6 màu ,Màn Hình Kỹ Thuật Số Giảm Tiếng Ồn Tích Hợp mic"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-55%" />
                                                        -55%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="w-5 h-5 stroke-none"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg")',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/ef5ae19bc5ed8a733a70.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Tai nghe Bluetooth KY8
                                                        trong suốt 6 màu ,Màn
                                                        Hình Kỹ Thuật Số Giảm
                                                        Tiếng Ồn Tích Hợp mic
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-full"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    9.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 1,6k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-Gel-Bút-Bi-Nước-Mực-Gel-Đen-Xanh-Đỏ-Khô-Nhanh-Ngòi-0.5mm-Mực-Đều-Nét-Chữ-Đẹp-Đủ-Màu-MiGA-i.1077714691.23458948245?sp_atk=cd050afc-2d6a-4e89-8115-e1e94d71c966&xptdk=cd050afc-2d6a-4e89-8115-e1e94d71c966"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lutiwuvo4geq3c_tn.webp"
                                                        alt="Bút Gel  Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ Màu MiGA"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-40%" />
                                                        -40%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        Bút Gel Bút Bi Nước Mực
                                                        Gel Đen Xanh Đỏ Khô
                                                        Nhanh Ngòi 0.5mm, Mực
                                                        Đều, Nét Chữ Đẹp Đủ Màu
                                                        MiGA
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫1k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 70k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-Gel-Bút-Bi-Nước-Mực-Gel-Đen-Xanh-Đỏ-Khô-Nhanh-Ngòi-0.5mm-Mực-Đều-Nét-Chữ-Đẹp-Đủ-Màu-MiGA-i.324368286.25373785770?sp_atk=2deac8f4-03b7-4c4d-b0a8-a69a3212c630&xptdk=2deac8f4-03b7-4c4d-b0a8-a69a3212c630"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lutiwuvdv1gl14_tn.webp"
                                                        alt="Bút Gel Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ Màu MiGA"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-40%" />
                                                        -40%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        Bút Gel Bút Bi Nước Mực
                                                        Gel Đen Xanh Đỏ Khô
                                                        Nhanh Ngòi 0.5mm, Mực
                                                        Đều, Nét Chữ Đẹp Đủ Màu
                                                        MiGA
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫1k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 201,1k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Loa-bluetooth-mini-nghe-nhạc-không-dây-M3-cầm-tay-nhỏ-gọn-âm-thanh-lớn-có-dây-đeo-i.452249817.16196297511?sp_atk=c14eb6f9-e548-4516-baca-528ca628b587&xptdk=c14eb6f9-e548-4516-baca-528ca628b587"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmkf8ti478inc1_tn.webp"
                                                        alt="Loa bluetooth mini nghe nhạc không dây M3 cầm tay nhỏ gọn âm thanh lớn có dây đeo"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="w-5 h-5 stroke-none"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg")',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/f7b342784ff25c9e4403.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Loa bluetooth mini nghe
                                                        nhạc không dây M3 cầm
                                                        tay nhỏ gọn âm thanh lớn
                                                        có dây đeo
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫500k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1"
                                                            style={{
                                                                color: "rgb(246, 145, 19)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                #ShopXuHuong
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    20.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Tai-nghe-không-dây-Bluetooth-game-thể-thao-giảm-tiếng-ồn-phù-hợp-với-mọi-dòng-điện-thoại-di-động-i.196261835.25518672099?sp_atk=426689f1-c047-4b55-9068-ff3734e28dad&xptdk=426689f1-c047-4b55-9068-ff3734e28dad"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/sg-11134301-7rcc5-lsgo4bksw5uo49_tn.webp"
                                                        alt="Tai nghe không dây Bluetooth game thể thao giảm tiếng ồn phù hợp với mọi dòng điện thoại di động"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-8%" />
                                                        -8%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/ef5ae19bc5ed8a733a70.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Tai nghe không dây
                                                        Bluetooth game thể thao
                                                        giảm tiếng ồn phù hợp
                                                        với mọi dòng điện thoại
                                                        di động
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-full"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    60.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 13,6k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-Gel-Bút-Bi-Nước-Mực-Gel-Đen-Xanh-Đỏ-Khô-Nhanh-Ngòi-0.5mm-Mực-Đều-Nét-Chữ-Đẹp-Đủ-3-Màu-MiGA-i.98739931.24577553405?sp_atk=1396071a-fae8-422f-ad6f-15dfa071c1ac&xptdk=1396071a-fae8-422f-ad6f-15dfa071c1ac"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-ly2r15aiggrd32_tn.webp"
                                                        alt="Bút Gel Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ 3 Màu MiGA"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-40%" />
                                                        -40%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        Bút Gel Bút Bi Nước Mực
                                                        Gel Đen Xanh Đỏ Khô
                                                        Nhanh Ngòi 0.5mm, Mực
                                                        Đều, Nét Chữ Đẹp Đủ 3
                                                        Màu MiGA
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-[60%] flex-shrink-0"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pointer-events-none text-ellipsis overflow-hidden h-4 flex-grow-0 flex-shrink-1 flex flex-row justify-start items-stretch">
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="flex-none h-full"
                                                            />
                                                            <div className="truncate bg-shopee-voucher-yellow text-white leading-4 text-sp10">
                                                                Giảm ₫1k
                                                            </div>
                                                            <img
                                                                src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/6860407a9f0e07000b6f.svg"
                                                                alt="voucher-label-border"
                                                                className="rotate-180 flex-none h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 5,4k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Bút-Gel-MIGA-Bút-Bi-Nước-Mực-Gel-Đen-Xanh-Đỏ-Khô-Nhanh-Ngòi-0.5mm-Mực-Đều-Nét-Chữ-Đẹp-Đủ-3-Màu-i.1143206766.23963070509?sp_atk=3852e5d3-3575-497e-b0e8-8bdc5ada3264&xptdk=3852e5d3-3575-497e-b0e8-8bdc5ada3264"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-ls6v9q46m6jd2e_tn.webp"
                                                        alt="Bút Gel MIGA Bút Bi Nước Mực Gel Đen Xanh Đỏ Khô Nhanh Ngòi 0.5mm, Mực Đều, Nét Chữ Đẹp Đủ 3 Màu"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-40%" />
                                                        -40%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        Bút Gel MIGA Bút Bi Nước
                                                        Mực Gel Đen Xanh Đỏ Khô
                                                        Nhanh Ngòi 0.5mm, Mực
                                                        Đều, Nét Chữ Đẹp Đủ 3
                                                        Màu
                                                    </div>
                                                    <div
                                                        className="box-border flex space-x-1 h-5 text-sp10 items-center overflow-hidden mb-2"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="relative flex items-center before:content-[''] before:origin-top-left before:top-0 before:absolute before:left-1 before:right-1 before:scale-y-50 before:bg-current before:h-px after:content-[''] after:origin-bottom-right after:bottom-0 after:absolute after:left-1 after:right-1 after:scale-y-50 after:bg-current after:h-px pointer-events-none text-ellipsis overflow-hidden h-4 max-w-full"
                                                            style={{
                                                                color: "rgb(238, 77, 45)",
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-1 h-4 absolute left-0 top-0"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                            <div className="text-sp10 leading-4 h-4 mx-1 truncate">
                                                                Rẻ Vô Địch
                                                            </div>
                                                            <svg
                                                                className="w-1 h-4 absolute right-0 top-0 transform rotate-180"
                                                                viewBox="-0.25 -0.25 4 16"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M4 0h-3q-1 0 -1 1v13.5q0 1 1 1h3"
                                                                    stroke="currentColor"
                                                                    strokeWidth="0.5"
                                                                    fill="transparent"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    1.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 34,6k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Senbenbao-Tai-nghe-không-dây-nhẹ-đầy-màu-sắc-được-nâng-cấp-mới-với-màn-hình-hiển-thị-nguồn-kỹ-thuật-số-LED-ngăn-sạc-trong-suốt-Tai-nghe-thể-thao-trò-chơi-âm-nhạc-có-độ-trung-thực-cao-i.888370483.25172999956?sp_atk=8f6697ff-c7ef-47f2-a4c6-e4a3f41232c9&xptdk=8f6697ff-c7ef-47f2-a4c6-e4a3f41232c9"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/sg-11134201-7rcer-ltvucif0h8up36_tn.webp"
                                                        alt="Senbenbao Tai nghe không dây nhẹ đầy màu sắc được nâng cấp mới với màn hình hiển thị nguồn kỹ thuật số LED, ngăn sạc trong suốt, Tai nghe thể thao trò chơi âm nhạc có độ trung thực cao"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-32%" />
                                                        -32%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="inline-block px-1 py-0.5 rounded-sm bg-shopee-black26 text-xs/3 capitalize text-white whitespace-nowrap">
                                                            Ad
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/a0842aa9294375794fd2.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Senbenbao Tai nghe không
                                                        dây nhẹ đầy màu sắc được
                                                        nâng cấp mới với màn
                                                        hình hiển thị nguồn kỹ
                                                        thuật số LED, ngăn sạc
                                                        trong suốt, Tai nghe thể
                                                        thao trò chơi âm nhạc có
                                                        độ trung thực cao
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    65.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 10
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="N_YeYe">
                                    <div
                                        className="shopee_ic"
                                        style={{ display: "contents" }}
                                    >
                                        <a
                                            className="contents"
                                            href="/Tai-nghe-không-dây-HQAi-H4-Tai-nghe-Bluetooth-Mic-tích-hợp-Tai-nghe-Tai-nghe-Hi-fi-thể-thao-chống-i.1255980089.24880310689?sp_atk=5e8101ee-002d-4fe2-9d14-e070ac808236&xptdk=5e8101ee-002d-4fe2-9d14-e070ac808236"
                                        >
                                            <div className="flex flex-col bg-white cursor-pointer h-full h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1] border border-shopee-black9">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img
                                                        src="https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lvbq3iba5bqp60_tn.webp"
                                                        alt="Tai nghe không dây HQAi H4 Tai nghe Bluetooth Mic tích hợp Tai nghe Tai nghe Hi-fi thể thao chống"
                                                        className="inset-y-0 w-full h-full pointer-events-none object-contain absolute"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="text-shopee-primary font-medium bg-shopee-pink py-0.5 px-1 text-xs/sp14 absolute top-0 right-0 z-30">
                                                        <span aria-label="-44%" />
                                                        -44%
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 left-0 z-10 w-full w-full h-hull"
                                                        aria-label="image overlay,src:https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                    >
                                                        <img
                                                            src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lxh4aalygxcpc2"
                                                            className="w-full"
                                                            alt="custom-overlay"
                                                        />
                                                    </div>
                                                    <div
                                                        className="absolute bottom-0 right-0 z-30 flex pr-1 pb-1"
                                                        aria-hidden="true"
                                                    >
                                                        <div
                                                            className="w-5 h-5 stroke-none"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg")',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="mb-1 whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                        <img
                                                            src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-recommendation-v2/0.0.0-mr-20240805121008/pc/ef5ae19bc5ed8a733a70.png"
                                                            alt="flag-label"
                                                            className="mr-0.5 mb-0.5 inline-block h-[14px]"
                                                        />
                                                        Tai nghe không dây HQAi
                                                        H4 Tai nghe Bluetooth
                                                        Mic tích hợp Tai nghe
                                                        Tai nghe Hi-fi thể thao
                                                        chống
                                                    </div>
                                                    <div className="flex justify-between items-center space-x-1">
                                                        <div className="max-w-full flex-grow-1 flex-shrink-0 truncate text-shopee-primary flex items-center font-medium">
                                                            <span aria-label="promotion price" />
                                                            <div className="truncate flex items-baseline">
                                                                <span className="text-xs/sp14 font-medium mr-px">
                                                                    ₫
                                                                </span>
                                                                <span className="font-medium text-base/5 truncate">
                                                                    49.000
                                                                </span>
                                                                <span className="text-xs/sp14 font-medium mr-px" />
                                                            </div>
                                                        </div>
                                                        <div className="truncate text-shopee-black87 text-xs min-h-4 flex-shrink-1 ml-auto">
                                                            Đã bán 1,9k
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
