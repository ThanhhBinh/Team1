import React, { useState } from "react";
export default function VnOnboardingForm3() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        console.log("Button clicked"); // Thêm log này
        setShowPopup(!showPopup);
    };

    return (
        <div className="container-VnOnboarding">
            <div className="hearder-banhang-shopee">
                <div className="formable-onboarding-page">
                    <div className="hearder-onboarding">
                        <div className="hearder-wrapper-onboearding">
                            <div className="header-logo-onboearding">
                                <div className="icon-onboearding">
                                    <svg
                                        viewBox="0 0 420 134"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08ZM56.32 7.34c10.83 0 19.66 10.208 20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34Zm41.12 118.347c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004Zm59.446-54.346c17.803 5.329 24.807 11.993 23.687 22.693-.69 6.591-4.631 11.946-10.809 14.69-3.405 1.512-7.967 2.371-11.606 2.19-5.602-.115-10.897-1.376-15.8-3.763-1.77-.862-4.38-2.575-6.41-4.204l-.008-.006c-.949-.799-1.062-1.318-.413-2.28.168-.262.476-.728 1.186-1.8.61-.919 1.219-1.843 1.248-1.889.76-1.146 1.563-1.146 2.67-.385l.393.291.39.29c5.041 3.771 10.862 5.897 16.664 6.017 7.94-.245 13.54-3.81 14.44-9.1.99-5.818-3.817-10.806-13.208-13.545-3.285-.958-10.464-3.649-12.467-4.702-7.044-3.932-10.44-9.275-10.086-15.924.557-9.205 8.992-16.193 19.765-16.426 4.734-.091 9.472.8 14.037 2.613 1.645.654 4.528 2.145 5.567 2.886 1.209.853 1.209 1.442.62 2.544-.083.144-.397.598-1.21 1.761l-.003.004c-.859 1.227-1.116 1.598-1.192 1.724-.706.915-1.299 1.198-2.508.468-4.753-3.046-9.573-4.483-15.022-4.497-6.715.25-11.647 4.23-11.884 9.51.002 4.757 3.772 8.212 11.96 10.84Zm49.938-2.667c10.861 0 19.83 8.768 19.87 19.512v20.99c0 1.21-.31 1.496-1.5 1.496h-4.99c-1.2 0-1.5-.285-1.5-1.497V88.25c-.026-6.48-5.337-11.721-11.88-11.721-6.527 0-11.83 5.217-11.88 11.675v20.972c0 1.043-.41 1.498-1.5 1.498h-5.002c-1.19 0-1.5-.44-1.5-1.498V44.961c0-1.102.31-1.496 1.5-1.496h5.002c1.072 0 1.5.415 1.5 1.496v27.635a19.956 19.956 0 0 1 11.88-3.922Zm47.72 34.434c7.519 0 13.611-5.97 13.611-13.331 0-7.362-6.093-13.332-13.611-13.332-7.52 0-13.612 5.97-13.612 13.332 0 7.361 6.093 13.331 13.612 13.331Zm.004-34.39c11.871 0 21.496 9.43 21.496 21.069 0 11.638-9.625 21.07-21.496 21.07-11.87 0-21.497-9.432-21.497-21.07 0-11.639 9.626-21.07 21.497-21.07Zm132.809 16.178h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492Zm29.72 7.726-.095-.002h-30.114c.763 3.867 3.42 7.16 7.093 9.003.951.454 1.988.832 3.094 1.13 5.38 1.125 11.556.305 16.263-3.876.067-.075.195-.155.333-.276.788-.696 1.343-.52 1.962.252 0 0 .884 1.228 2.463 3.741.68 1.06.63 1.57-.51 2.744-.047.047-.136.13-.268.246a13.8 13.8 0 0 1-.775.629 20.17 20.17 0 0 1-3.073 1.89c-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.542 20.542 0 0 1-5.163-11.136h-.005l-.033-.274c-.1-.858-.152-1.722-.152-2.592 0-11.634 9.123-21.07 20.381-21.07 11.26 0 20.381 9.435 20.381 21.07v.156c.003.055.005.113.005.177 0 1.355-1.037 2.473-2.351 2.532a2.957 2.957 0 0 1-.11.003ZM303.78 102.999c7.383 0 13.367-5.968 13.367-13.331 0-7.363-5.984-13.332-13.367-13.332-7.257 0-13.183 5.774-13.363 12.986v.687c.182 7.218 6.108 12.99 13.363 12.99Zm.004-34.391c11.666 0 21.125 9.433 21.125 21.07s-9.459 21.07-21.125 21.07a21.068 21.068 0 0 1-13.367-4.754v24.738c0 1.11-.31 1.496-1.5 1.496h-4.758c-1.19 0-1.5-.395-1.5-1.496V70.104c0-1.163.31-1.496 1.5-1.496h4.758c1.19 0 1.5.363 1.5 1.496v3.258a21.07 21.07 0 0 1 13.367-4.754Zm36.387 16.288h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492Zm32.176 4.858-.001.156c.004.055.005.113.005.177 0 1.355-1.036 2.473-2.35 2.532a2.96 2.96 0 0 1-.206 0h-30.114c.764 3.868 3.42 7.161 7.094 9.004.951.454 1.988.832 3.094 1.13 5.38 1.125 11.555.305 16.262-3.876.068-.075.195-.155.333-.276.789-.696 1.344-.52 1.963.252 0 0 .884 1.228 2.462 3.741.68 1.06.63 1.57-.51 2.744-.046.047-.135.13-.267.246-.216.19-.475.401-.775.629a20.17 20.17 0 0 1-3.073 1.89c-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.541 20.541 0 0 1-5.163-11.136h-.005l-.033-.274a22.122 22.122 0 0 1-.153-2.592c0-11.634 9.124-21.07 20.382-21.07 11.259 0 20.38 9.435 20.38 21.07Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="title-onboearding">
                                    Đăng ký trở thành Người bán Shopee
                                </div>
                            </div>
                            <div className="header-user-onboearding">
                                <div
                                    data-v-2cea0e7b
                                    data-v-6600c0e8
                                    className="account-popover-onboearding eds-popover eds-popover--light"
                                >
                                    <div
                                        data-v-2cea0e7b
                                        className="eds-popover__ref"
                                    >
                                        <div
                                            data-v-6600c0e8
                                            data-v-2cea0e7b
                                            className="account-popover-controller"
                                        >
                                            <img
                                                data-v-6600c0e8
                                                data-v-2cea0e7b
                                                src="https://cf.shopee.vn/file/da97fdeade6243b50ca0ea691badd0a9"
                                                className="avatar-VnOnboarding"
                                                alt=""
                                            />
                                            <div
                                                data-v-6600c0e8
                                                data-v-2cea0e7b
                                                className="account-name-VnOnboarding"
                                            >
                                                <div
                                                    data-v-6600c0e8
                                                    data-v-2cea0e7b
                                                    className="username-VnOnboarding"
                                                >
                                                    truong_giang.01
                                                </div>
                                                {/**/}
                                            </div>
                                            <i
                                                data-v-c3cf29f8
                                                data-v-6600c0e8
                                                className="eds-icon arrow-icon "
                                                data-v-2cea0e7b
                                            >
                                                <svg
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="arrow-icon-onboearding"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.25 9.19 4.28 5.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06L8.25 9.19Z"
                                                    />
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                    <div
                                        data-v-0935b9f0
                                        data-v-2cea0e7b
                                        className="eds-popper eds-popover__popper eds-popover__popper--light with-arrow onboarding-header-popover"
                                        style={{
                                            display: "none",
                                            maxWidth: 320,
                                        }}
                                    >
                                        <div
                                            data-v-2cea0e7b
                                            className="eds-popover__content"
                                        >
                                            <div
                                                data-v-6600c0e8
                                                className="account-popover-content"
                                            >
                                                <div
                                                    data-v-6600c0e8
                                                    className="avatar-box"
                                                >
                                                    <img
                                                        data-v-6600c0e8
                                                        src="https://cf.shopee.vn/file/da97fdeade6243b50ca0ea691badd0a9"
                                                        className="avatar"
                                                        alt="a"
                                                    />
                                                    <span
                                                        data-v-6600c0e8
                                                        className="username"
                                                    >
                                                        truong_giang.01
                                                    </span>
                                                    {/**/}
                                                </div>
                                                {/**/}
                                                <div
                                                    data-v-6600c0e8
                                                    className="line-splitter"
                                                />
                                                {/**/}
                                                <div
                                                    data-v-6600c0e8
                                                    className="action-item"
                                                >
                                                    <i
                                                        data-v-c3cf29f8
                                                        data-v-6600c0e8
                                                        className="prefix-icon eds-icon"
                                                    >
                                                        <svg
                                                            data-name="Layer 1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 32 32"
                                                        >
                                                            <path
                                                                d="M31.77 15.42a.93.93 0 0 1 .21.52 1 1 0 0 1-.26.62l-8.07 8a1 1 0 1 1-1.38-1.38L28.62 17H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h23.6l-6.32-6.33a1 1 0 1 1 1.38-1.38s8.08 8.09 8.11 8.13ZM16 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4h-2Z"
                                                                style={{
                                                                    fillRule:
                                                                        "evenodd",
                                                                }}
                                                            />
                                                        </svg>
                                                    </i>
                                                    <span data-v-6600c0e8>
                                                        Đăng xuất
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-6600c0e8 className="action" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parent-container-VnOnboarding-form">
                    <div className="onboarding-steps-form2">
                        <div className="onboarding-steps__wrap-form2">
                            <div className="onboarding-steps__item-form2">
                                <div className="eds-step-form2">
                                    <div className="eds-step__head-dot-form2" />
                                    <div className="eds-step__tail-form2" />
                                    <div className="eds-step__content-form2">
                                        Thông tin Shop
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-steps__item-form2">
                                <div className="eds-step-form2">
                                    <div className="eds-step__head-dot-form2" />
                                    <div className="eds-step__tail-form2" />
                                    <div className="eds-step__content-form2">
                                        Cài đặt vận chuyển
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-steps__item-form2">
                                <div className="eds-step-form2">
                                    <div className="eds-step__head-dot-form2" />
                                    <div className="eds-step__tail-form2" />
                                    <div className="eds-step__content-form2">
                                        Thông tin thuế
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                            <div className="onboarding-steps__item-form2">
                                <div className="eds-step-form2">
                                    <div className="eds-step__head-dot-form2" />
                                    <div className="eds-step__tail-form2" />
                                    <div className="eds-step__content-form2">
                                        Thông tin định danh
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                            <div className="onboarding-steps__item-form2">
                                <div className="eds-step-form2">
                                    <div className="eds-step__head-dot-form2" />
                                    <div className="eds-step__content-form2">
                                        Hoàn tất . . . . .
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-v-37cbddb4 className="steps-alert common-alert">
                        <div
                            data-v-37cbddb4
                            className="onboarding-alert"
                            type="info"
                        >
                            <div
                                data-v-58e7d4c0
                                className="eds-alert eds-alert--info"
                            >
                                <div data-v-58e7d4c0 className="eds-alert-icon">
                                    <i
                                        data-v-c3cf29f8
                                        data-v-58e7d4c0
                                        className="eds-icon"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8.30163718,10.5595183 C8.14108673,10.7430046 8.00347205,10.8347477 7.91172893,10.8347477 C7.86585737,10.8347477 7.84292159,10.8347477 7.79705003,10.8118119 C7.75117847,10.7888761 7.75117847,10.7430046 7.75117847,10.6741972 C7.75117847,10.6053899 7.77411425,10.4219037 7.84292159,10.1696101 C7.86585737,10.077867 7.91172893,9.89438073 7.98053627,9.64208716 L8.80622434,6.6375 L8.34750874,6.72924312 C8.18695829,6.7521789 7.91172893,6.79805046 7.54475645,6.84392202 C7.15484819,6.88979358 6.87961884,6.91272936 6.67319682,6.93566514 L6.67319682,7.2108945 C6.90255462,7.2108945 7.06310507,7.23383028 7.15484819,7.27970183 C7.24659131,7.32557339 7.29246287,7.39438073 7.29246287,7.53199541 L7.29246287,7.60080275 C7.29246287,7.62373853 7.29246287,7.64667431 7.26952709,7.69254587 L6.62732526,10.077867 C6.5814537,10.2613532 6.53558214,10.3989679 6.51264636,10.490711 C6.4667748,10.6741972 6.44383902,10.8118119 6.44383902,10.903555 C6.44383902,11.1558486 6.51264636,11.3393349 6.67319682,11.4540138 C6.83374728,11.5686927 6.99429774,11.6375 7.20071975,11.6375 C7.54475645,11.6375 7.86585737,11.4998853 8.16402251,11.2017202 C8.34750874,11.0182339 8.59980232,10.6741972 8.94383902,10.1696101 L8.71448122,10.0090596 C8.59980232,10.1925459 8.43925186,10.3760321 8.30163718,10.5595183 L8.30163718,10.5595183 Z M8.19383902,4.3625 C7.97609708,4.3625 7.80674225,4.43508065 7.66158095,4.58024194 C7.51641966,4.72540323 7.44383902,4.89475806 7.44383902,5.1125 C7.44383902,5.33024194 7.51641966,5.49959677 7.66158095,5.64475806 C7.80674225,5.78991935 7.97609708,5.8625 8.19383902,5.8625 C8.41158095,5.8625 8.58093579,5.78991935 8.72609708,5.64475806 C8.87125837,5.49959677 8.94383902,5.33024194 8.94383902,5.1125 C8.94383902,4.89475806 8.87125837,4.72540323 8.72609708,4.58024194 C8.58093579,4.43508065 8.41158095,4.3625 8.19383902,4.3625 L8.19383902,4.3625 Z"
                                            />
                                        </svg>
                                    </i>
                                </div>
                                <div
                                    data-v-58e7d4c0
                                    className="eds-alert-content"
                                >
                                    <div
                                        data-v-58e7d4c0
                                        className="eds-alert-title"
                                    >
                                        Vui lòng cung cấp Thông Tin Định Danh
                                        của Chủ Shop (nếu là cá nhân), hoặc
                                        Người Đại Diện Pháp Lý trên giấy đăng ký
                                        kinh doanh.
                                    </div>
                                    {/**/}
                                </div>
                                {/**/}
                            </div>
                        </div>
                    </div>
                    <div data-v-37cbddb4 className="step-content">
                        <div
                            data-v-4c029a7c
                            data-v-37cbddb4
                            className="abstract-form"
                        >
                            <form
                                data-v-5560716f
                                data-v-4c029a7c
                                autoComplete="off"
                                className="eds-form eds-form--label-right"
                            >
                                <div
                                    data-v-4c029a7c
                                    className="formable-renderer"
                                    data-v-5560716f
                                >
                                    <div
                                        className="onboarding-form-item"
                                        defaultvalue="[object Object]"
                                        editable={1}
                                        options="[object Object],[object Object],[object Object]"
                                        page_id={29091}
                                        required="required"
                                        rules="[object Object]"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291401_c~form-itemId"
                                        prop="form_0_component_291401_c"
                                        componentid="form_0_component_291401_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                            defaultvalue="[object Object]"
                                            editable={1}
                                            options="[object Object],[object Object],[object Object]"
                                            page_id={29091}
                                            rootcontext="[object Object]"
                                            id="form_0_component_291401_c~form-itemId"
                                            componentid="form_0_component_291401_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291401_c"
                                                className="eds-form-item__label"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Hình Thức Định Danh
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-radio"
                                                            extra
                                                            label="Hình Thức Định Danh"
                                                            page_id={29091}
                                                            required="required"
                                                            rules="[object Object]"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291401_cId"
                                                            prop="form_0_component_291401_c"
                                                            componentid="form_0_component_291401_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                        >
                                                            <div
                                                                data-v-58f10567
                                                                className="eds-radio-group onboarding-radio__group eds-radio-group--normal eds-radio-group--solid"
                                                                extra
                                                                label="Hình Thức Định Danh"
                                                                page_id={29091}
                                                                required="required"
                                                                rules="[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291401_cId"
                                                                prop="form_0_component_291401_c"
                                                                componentid="form_0_component_291401_c"
                                                                rendercomponent="[object Object]"
                                                                renderinslotname="default"
                                                                renderinscope="[object Object]"
                                                                parentrenderercontext="[object Object]"
                                                                rootrenderercontext="[object Object]"
                                                            >
                                                                <div
                                                                    data-v-58f10567
                                                                >
                                                                    <label
                                                                        data-v-83018650
                                                                        className="eds-radio onboarding-radio__item"
                                                                        label="Căn Cước Công Dân (CCCD)"
                                                                        link_component_ids="form_0_component_291402_c"
                                                                        option_type={
                                                                            1
                                                                        }
                                                                        option_value={
                                                                            1
                                                                        }
                                                                        data-v-58f10567
                                                                    >
                                                                        <input
                                                                            data-v-83018650
                                                                            type="radio"
                                                                            className="eds-radio__input"
                                                                            defaultValue={
                                                                                1
                                                                            }
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__indicator"
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__label"
                                                                        >
                                                                            Căn
                                                                            Cước
                                                                            Công
                                                                            Dân
                                                                            (CCCD)
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    data-v-58f10567
                                                                >
                                                                    <label
                                                                        data-v-83018650
                                                                        className="eds-radio onboarding-radio__item"
                                                                        label="Chứng Minh Nhân Dân (CMND)"
                                                                        link_component_ids="form_0_component_291403_c"
                                                                        option_type={
                                                                            1
                                                                        }
                                                                        option_value={
                                                                            2
                                                                        }
                                                                        data-v-58f10567
                                                                    >
                                                                        <input
                                                                            data-v-83018650
                                                                            type="radio"
                                                                            className="eds-radio__input"
                                                                            defaultValue={
                                                                                2
                                                                            }
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__indicator"
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__label"
                                                                        >
                                                                            Chứng
                                                                            Minh
                                                                            Nhân
                                                                            Dân
                                                                            (CMND)
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    data-v-58f10567
                                                                >
                                                                    <label
                                                                        data-v-83018650
                                                                        className="eds-radio onboarding-radio__item"
                                                                        label="Hộ chiếu"
                                                                        link_component_ids="form_0_component_291404_c"
                                                                        option_type={
                                                                            1
                                                                        }
                                                                        option_value={
                                                                            3
                                                                        }
                                                                        data-v-58f10567
                                                                    >
                                                                        <input
                                                                            data-v-83018650
                                                                            type="radio"
                                                                            className="eds-radio__input"
                                                                            defaultValue={
                                                                                3
                                                                            }
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__indicator"
                                                                        />
                                                                        <span
                                                                            data-v-83018650
                                                                            className="eds-radio__label"
                                                                        >
                                                                            Hộ
                                                                            chiếu
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>{" "}
                                                            {/**/}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/**/}
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    {/**/}{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    <div
                                        className="onboarding-form-item"
                                        editable={1}
                                        maxLength={12}
                                        page_id={29095}
                                        required="required"
                                        restrictionfunc="function () { [native code] }"
                                        rules="[object Object],[object Object],[object Object]"
                                        show-word-limit="true"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291402_c~form-itemId"
                                        prop="form_0_component_291402_c"
                                        componentid="form_0_component_291402_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--error eds-form-item--extra onboarding-form-item__inner"
                                            editable={1}
                                            maxLength={12}
                                            page_id={29095}
                                            restrictionfunc="function () { [native code] }"
                                            show-word-limit="true"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291402_c~form-itemId"
                                            componentid="form_0_component_291402_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291402_c"
                                                className="eds-form-item__label eds-form-item__label--error"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Số Căn Cước Công Dân (CCCD)
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-input"
                                                            extra
                                                            label="Số Căn Cước Công Dân (CCCD)"
                                                            maxLength={12}
                                                            page_id={29095}
                                                            required="required"
                                                            rules="[object Object],[object Object],[object Object]"
                                                            show-word-limit="true"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291402_cId"
                                                            prop="form_0_component_291402_c"
                                                            componentid="form_0_component_291402_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                            style={{
                                                                width: 384,
                                                            }}
                                                        >
                                                            <div
                                                                data-v-0ea4e9de
                                                                className="eds-input"
                                                                extra
                                                                label="Số Căn Cước Công Dân (CCCD)"
                                                                page_id={29095}
                                                                rules="[object Object],[object Object],[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291402_cId"
                                                                prop="form_0_component_291402_c"
                                                                componentid="form_0_component_291402_c"
                                                                rendercomponent="[object Object]"
                                                                renderinslotname="default"
                                                                renderinscope="[object Object]"
                                                                parentrenderercontext="[object Object]"
                                                                rootrenderercontext="[object Object]"
                                                            >
                                                                <div
                                                                    data-v-0ea4e9de
                                                                    className="eds-input__inner eds-input__inner--normal"
                                                                >
                                                                    {/**/}
                                                                    <input
                                                                        data-v-0ea4e9de
                                                                        type="text"
                                                                        placeholder="Nhập vào"
                                                                        resize="vertical"
                                                                        rows={2}
                                                                        minrows={
                                                                            2
                                                                        }
                                                                        required="required"
                                                                        maxLength={
                                                                            12
                                                                        }
                                                                        restrictiontype="input"
                                                                        showwordlimit="true"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        className="eds-input__input"
                                                                    />
                                                                    <div
                                                                        data-v-0ea4e9de
                                                                        className="eds-input__suffix"
                                                                    >
                                                                        {/**/}
                                                                        {/**/}
                                                                        <span
                                                                            data-v-0ea4e9de
                                                                            className="eds-input__count"
                                                                        >
                                                                            0/12
                                                                        </span>
                                                                        {/**/}
                                                                        {/**/}
                                                                    </div>
                                                                </div>
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__error"
                                                >
                                                    Vui lòng nhập số CCCD của
                                                    bạn
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    {/**/}{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    {/**/}
                                    {/**/}
                                    <div
                                        className="onboarding-form-item"
                                        editable={1}
                                        maxLength={100}
                                        page_id={29107}
                                        required="required"
                                        rules="[object Object],[object Object]"
                                        show-word-limit="true"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291405_c~form-itemId"
                                        prop="form_0_component_291405_c"
                                        componentid="form_0_component_291405_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--error eds-form-item--extra onboarding-form-item__inner"
                                            editable={1}
                                            maxLength={100}
                                            page_id={29107}
                                            show-word-limit="true"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291405_c~form-itemId"
                                            componentid="form_0_component_291405_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra="Theo CMND/CCCD/Hộ Chiếu"
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291405_c"
                                                className="eds-form-item__label eds-form-item__label--error"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Họ &amp; Tên
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-input"
                                                            extra="Theo CMND/CCCD/Hộ Chiếu"
                                                            label="Họ & Tên"
                                                            maxLength={100}
                                                            page_id={29107}
                                                            required="required"
                                                            rules="[object Object],[object Object]"
                                                            show-word-limit="true"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291405_cId"
                                                            prop="form_0_component_291405_c"
                                                            componentid="form_0_component_291405_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                            style={{
                                                                width: 384,
                                                            }}
                                                        >
                                                            <div
                                                                data-v-0ea4e9de
                                                                className="eds-input"
                                                                extra="Theo CMND/CCCD/Hộ Chiếu"
                                                                label="Họ & Tên"
                                                                page_id={29107}
                                                                rules="[object Object],[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291405_cId"
                                                                prop="form_0_component_291405_c"
                                                                componentid="form_0_component_291405_c"
                                                                rendercomponent="[object Object]"
                                                                renderinslotname="default"
                                                                renderinscope="[object Object]"
                                                                parentrenderercontext="[object Object]"
                                                                rootrenderercontext="[object Object]"
                                                            >
                                                                <div
                                                                    data-v-0ea4e9de
                                                                    className="eds-input__inner eds-input__inner--normal"
                                                                >
                                                                    {/**/}
                                                                    <input
                                                                        data-v-0ea4e9de
                                                                        type="text"
                                                                        placeholder="Nhập vào"
                                                                        resize="vertical"
                                                                        rows={2}
                                                                        minrows={
                                                                            2
                                                                        }
                                                                        required="required"
                                                                        maxLength={
                                                                            100
                                                                        }
                                                                        restrictiontype="input"
                                                                        showwordlimit="true"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        className="eds-input__input"
                                                                    />
                                                                    <div
                                                                        data-v-0ea4e9de
                                                                        className="eds-input__suffix"
                                                                    >
                                                                        {/**/}
                                                                        {/**/}
                                                                        <span
                                                                            data-v-0ea4e9de
                                                                            className="eds-input__count"
                                                                        >
                                                                            0/100
                                                                        </span>
                                                                        {/**/}
                                                                        {/**/}
                                                                    </div>
                                                                </div>
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                                {/**/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__error"
                                                >
                                                    Vui lòng điền chính xác họ
                                                    tên theo căn cước của bạn
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="onboarding-extra-text"
                                                    >
                                                        Theo CMND/CCCD/Hộ Chiếu
                                                    </div>{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    <div
                                        className="onboarding-form-item"
                                        accept=".jpg, .jpeg, .png"
                                        editable={1}
                                        examples="[object Object]"
                                        numlimit="[object Object]"
                                        page_id={29111}
                                        required="required"
                                        resolutionlimit="[object Object]"
                                        sizelimit="[object Object]"
                                        valuekey="component_value"
                                        visible="visible"
                                        getuploadpreviewimg="function () { [native code] }"
                                        rules="[object Object],[object Object]"
                                        uploadrequest="function () { [native code] }"
                                        validatesize="function () { [native code] }"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291406_c~form-itemId"
                                        prop="form_0_component_291406_c"
                                        componentid="form_0_component_291406_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--error eds-form-item--extra onboarding-form-item__inner"
                                            accept=".jpg, .jpeg, .png"
                                            editable={1}
                                            examples="[object Object]"
                                            numlimit="[object Object]"
                                            page_id={29111}
                                            resolutionlimit="[object Object]"
                                            sizelimit="[object Object]"
                                            valuekey="component_value"
                                            visible="visible"
                                            getuploadpreviewimg="function () { [native code] }"
                                            uploadrequest="function () { [native code] }"
                                            validatesize="function () { [native code] }"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291406_c~form-itemId"
                                            componentid="form_0_component_291406_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra="Vui lòng cung cấp ảnh chụp cận CMND/CCCD/Hộ chiếu của bạn<br/>Các thông tin trong CMND/CCCD/Hộ chiếu phải được hiển thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)"
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291406_c"
                                                className="eds-form-item__label eds-form-item__label--error"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Hình chụp của thẻ CMND/CCCD/hộ
                                                chiếu
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-media-upload"
                                                            extra="Vui lòng cung cấp ảnh chụp cận CMND/CCCD/Hộ chiếu của bạn<br/>Các thông tin trong CMND/CCCD/Hộ chiếu phải được hiển thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)"
                                                            label="Hình chụp của thẻ CMND/CCCD/hộ chiếu"
                                                            page_id={29111}
                                                            required="required"
                                                            valuekey="component_value"
                                                            visible="visible"
                                                            rules="[object Object],[object Object]"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291406_cId"
                                                            prop="form_0_component_291406_c"
                                                            componentid="form_0_component_291406_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                        >
                                                            <div className="upload-preview-list">
                                                                {" "}
                                                                <div className="upload-core">
                                                                    <div
                                                                        data-v-3e129c5f
                                                                        className="eds-upload upload"
                                                                    >
                                                                        <div
                                                                            data-v-3e129c5f
                                                                            className="eds-upload-wrapper"
                                                                        >
                                                                            <input
                                                                                data-v-3e129c5f
                                                                                type="file"
                                                                                name="file"
                                                                                accept=".jpg, .jpeg, .png"
                                                                                className="eds-upload__input"
                                                                            />
                                                                            <div
                                                                                data-v-3e129c5f
                                                                                className="upload-core__frame"
                                                                                style={{
                                                                                    width: 96,
                                                                                    height: 96,
                                                                                }}
                                                                            >
                                                                                {/**/}{" "}
                                                                                <div
                                                                                    data-v-3e129c5f
                                                                                    className="add-icon"
                                                                                >
                                                                                    <i class="fas fa-plus"></i>
                                                                                </div>{" "}
                                                                                {/**/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>{" "}
                                                                <div
                                                                    className="upload-examples"
                                                                    style={{
                                                                        width: 96,
                                                                        height: 96,
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="upload-examples-item"
                                                                        style={{
                                                                            width: 80,
                                                                            height: 50,
                                                                            cursor: "auto",
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src="https://deo.shopeesz.com/shopee/pap-admin-live-sg/upload/upload_828913370010bd73b9c46b481ae40b89.png"
                                                                            alt
                                                                            className="upload-examples__item-img"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                            {/**/}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__error"
                                                >
                                                    Vui lòng đăng tải hình chụp
                                                    của thẻ CMND/CCCD/Hộ chiếu
                                                    của bạn.
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="onboarding-extra-text"
                                                    >
                                                        Vui lòng cung cấp ảnh
                                                        chụp cận CMND/CCCD/Hộ
                                                        chiếu của bạn
                                                        <br />
                                                        Các thông tin trong
                                                        CMND/CCCD/Hộ chiếu phải
                                                        được hiển thị rõ ràng
                                                        (Kích thước ảnh không
                                                        vượt quá 5.0 MB)
                                                    </div>{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    <div
                                        className="onboarding-form-item"
                                        accept=".jpg, .jpeg, .png"
                                        editable={1}
                                        examples="[object Object]"
                                        numlimit="[object Object]"
                                        page_id={29115}
                                        required="required"
                                        resolutionlimit="[object Object]"
                                        sizelimit="[object Object]"
                                        valuekey="component_value"
                                        visible="visible"
                                        getuploadpreviewimg="function () { [native code] }"
                                        rules="[object Object],[object Object]"
                                        uploadrequest="function () { [native code] }"
                                        validatesize="function () { [native code] }"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291407_c~form-itemId"
                                        prop="form_0_component_291407_c"
                                        componentid="form_0_component_291407_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--error eds-form-item--extra onboarding-form-item__inner"
                                            accept=".jpg, .jpeg, .png"
                                            editable={1}
                                            examples="[object Object]"
                                            numlimit="[object Object]"
                                            page_id={29115}
                                            resolutionlimit="[object Object]"
                                            sizelimit="[object Object]"
                                            valuekey="component_value"
                                            visible="visible"
                                            getuploadpreviewimg="function () { [native code] }"
                                            uploadrequest="function () { [native code] }"
                                            validatesize="function () { [native code] }"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291407_c~form-itemId"
                                            componentid="form_0_component_291407_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra="Vui lòng cung cấp ảnh bạn cầm CMND/CCCD/Hộ chiếu như ảnh mẫu. <br/>Các thông tin trong CMND/CCCD/Hộ chiếu và hình ảnh của bạn phải được hiển thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)"
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291407_c"
                                                className="eds-form-item__label eds-form-item__label--error"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Ảnh đang cầm CMND/CCCD/Hộ chiếu
                                                của bạn
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-media-upload"
                                                            extra="Vui lòng cung cấp ảnh bạn cầm CMND/CCCD/Hộ chiếu như ảnh mẫu. <br/>Các thông tin trong CMND/CCCD/Hộ chiếu và hình ảnh của bạn phải được hiển thị rõ ràng (Kích thước ảnh không vượt quá 5.0 MB)"
                                                            label="Ảnh đang cầm CMND/CCCD/Hộ chiếu của bạn"
                                                            page_id={29115}
                                                            required="required"
                                                            valuekey="component_value"
                                                            visible="visible"
                                                            rules="[object Object],[object Object]"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291407_cId"
                                                            prop="form_0_component_291407_c"
                                                            componentid="form_0_component_291407_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                        >
                                                            <div className="upload-preview-list">
                                                                {" "}
                                                                <div className="upload-core">
                                                                    <div
                                                                        data-v-3e129c5f
                                                                        className="eds-upload upload"
                                                                    >
                                                                        <div
                                                                            data-v-3e129c5f
                                                                            className="eds-upload-wrapper"
                                                                        >
                                                                            <input
                                                                                data-v-3e129c5f
                                                                                type="file"
                                                                                name="file"
                                                                                accept=".jpg, .jpeg, .png"
                                                                                className="eds-upload__input"
                                                                            />
                                                                            <div
                                                                                data-v-3e129c5f
                                                                                className="upload-core__frame"
                                                                                style={{
                                                                                    width: 96,
                                                                                    height: 96,
                                                                                }}
                                                                            >
                                                                                {/**/}{" "}
                                                                                <div
                                                                                    data-v-3e129c5f
                                                                                    className="add-icon"
                                                                                >
                                                                                    <i class="fas fa-plus"></i>
                                                                                </div>{" "}
                                                                                {/**/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>{" "}
                                                                <div
                                                                    className="upload-examples"
                                                                    style={{
                                                                        width: 96,
                                                                        height: 96,
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="upload-examples-item"
                                                                        style={{
                                                                            width: 80,
                                                                            height: 50,
                                                                            cursor: "auto",
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src="https://deo.shopeesz.com/shopee/pap-admin-live-sg/upload/upload_ecca1baef7662586ecf9552e749fa2de.png"
                                                                            alt
                                                                            className="upload-examples__item-img"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>{" "}
                                                            {/**/}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__error"
                                                >
                                                    Vui lòng đăng tải ảnh đang
                                                    cầm CMND/CCCD/Hộ chiếu của
                                                    bạn theo hướng dẫn trên.
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="onboarding-extra-text"
                                                    >
                                                        Vui lòng cung cấp ảnh
                                                        bạn cầm CMND/CCCD/Hộ
                                                        chiếu như ảnh mẫu.{" "}
                                                        <br />
                                                        Các thông tin trong
                                                        CMND/CCCD/Hộ chiếu và
                                                        hình ảnh của bạn phải
                                                        được hiển thị rõ ràng
                                                        (Kích thước ảnh không
                                                        vượt quá 5.0 MB)
                                                    </div>{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    <div
                                        className="onboarding-form-item"
                                        content="Tôi xác nhận tất cả dữ liệu đã cung cấp là chính xác và trung thực. Tôi đã đọc và đồng ý với Chính Sách Bảo Mật của Shopee."
                                        editable={1}
                                        page_id={29119}
                                        required="required"
                                        visible="visible"
                                        rules="[object Object]"
                                        width="955px"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291408_c~form-itemId"
                                        prop="form_0_component_291408_c"
                                        componentid="form_0_component_291408_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--error eds-form-item--extra onboarding-form-item__inner hideLabel"
                                            content="Tôi xác nhận tất cả dữ liệu đã cung cấp là chính xác và trung thực. Tôi đã đọc và đồng ý với Chính Sách Bảo Mật của Shopee."
                                            editable={1}
                                            page_id={29119}
                                            visible="visible"
                                            width="955px"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291408_c~form-itemId"
                                            componentid="form_0_component_291408_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra="Tìm hiểu thêm về Chính Sách Bảo Mật của Shopee tại <a target='blank' href='https://help.shopee.vn/portal/4/article/77244' >đây</a>"
                                            hidelabel="true"
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291408_c"
                                                className="eds-form-item__label eds-form-item__label--error"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                            </label>
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item__control"
                                            >
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__content"
                                                >
                                                    <div
                                                        className="formable-renderer"
                                                        data-v-b0f09100
                                                    >
                                                        <div
                                                            className="onboarding-terms"
                                                            editable={1}
                                                            extra="Tìm hiểu thêm về Chính Sách Bảo Mật của Shopee tại <a target='blank' href='https://help.shopee.vn/portal/4/article/77244' >đây</a>"
                                                            label
                                                            page_id={29119}
                                                            required="required"
                                                            visible="visible"
                                                            hidelabel="true"
                                                            rules="[object Object]"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291408_cId"
                                                            prop="form_0_component_291408_c"
                                                            componentid="form_0_component_291408_c"
                                                            rendercomponent="[object Object]"
                                                            renderinslotname="default"
                                                            renderinscope="[object Object]"
                                                            parentrenderercontext="[object Object]"
                                                            rootrenderercontext="[object Object]"
                                                            style={{
                                                                width: 955,
                                                            }}
                                                        >
                                                            <label
                                                                data-v-229bfea4
                                                                className="eds-checkbox onboarding-terms__checkbox"
                                                                editable={1}
                                                                extra="Tìm hiểu thêm về Chính Sách Bảo Mật của Shopee tại <a target='blank' href='https://help.shopee.vn/portal/4/article/77244' >đây</a>"
                                                                label
                                                                page_id={29119}
                                                                required="required"
                                                                visible="visible"
                                                                hidelabel="true"
                                                                rules="[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291408_cId"
                                                                prop="form_0_component_291408_c"
                                                                componentid="form_0_component_291408_c"
                                                                rendercomponent="[object Object]"
                                                                renderinslotname="default"
                                                                renderinscope="[object Object]"
                                                                parentrenderercontext="[object Object]"
                                                                rootrenderercontext="[object Object]"
                                                            >
                                                                <input
                                                                    data-v-229bfea4
                                                                    type="checkbox"
                                                                    className="eds-checkbox__input"
                                                                    defaultValue
                                                                />
                                                                <span
                                                                    data-v-229bfea4
                                                                    className="eds-checkbox__indicator"
                                                                >
                                                                    <i
                                                                        data-v-c3cf29f8
                                                                        data-v-229bfea4
                                                                        className="eds-icon"
                                                                    >
                                                                        <i class="fas fa-plus"></i>
                                                                    </i>
                                                                    {/**/}
                                                                </span>
                                                                {/**/}
                                                            </label>{" "}
                                                            <div>
                                                                <div className="onboarding-terms__content">
                                                                    Tôi xác nhận
                                                                    tất cả dữ
                                                                    liệu đã cung
                                                                    cấp là chính
                                                                    xác và trung
                                                                    thực. Tôi đã
                                                                    đọc và đồng
                                                                    ý với Chính
                                                                    Sách Bảo Mật
                                                                    của Shopee.
                                                                </div>{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__error"
                                                >
                                                    Xin vui lòng đánh dấu vào
                                                    hộp kiểm phía trên để tiếp
                                                    tục
                                                </div>
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="onboarding-extra-text"
                                                    >
                                                        Tìm hiểu thêm về Chính
                                                        Sách Bảo Mật của Shopee
                                                        tại{" "}
                                                        <a
                                                            target="blank"
                                                            href="https://help.shopee.vn/portal/4/article/77244"
                                                        >
                                                            đây
                                                        </a>
                                                    </div>{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="onboarding-layout__footer2">
                        <div data-v-37cbddb4 className="footer-form2">
                            <div data-v-37cbddb4>
                                <button
                                    data-v-2e4150da
                                    data-v-37cbddb4
                                    type="button"
                                    className="action-btn back eds-button eds-button--normal"
                                >
                                    <span data-v-2e4150da>
                                        <a
                                            href="/vn-onboarding/form1"
                                            style={{
                                                color: "#111",
                                            }}
                                        >
                                            Quay lại
                                        </a>
                                    </span>
                                </button>
                            </div>
                            <div data-v-37cbddb4>
                                <button
                                    data-v-2e4150da
                                    data-v-37cbddb4
                                    type="button"
                                    className="action-btn save eds-button eds-button--normal"
                                >
                                    <span data-v-2e4150da>Lưu</span>
                                </button>
                                <button
                                    data-v-2e4150da
                                    data-v-37cbddb4
                                    type="button"
                                    style={{
                                        background: "#ee4d2d",
                                        marginLeft: "10px",
                                    }}
                                    onClick={() =>
                                        (window.location.href =
                                            "/vn-onboarding/form4")
                                    }
                                    className="action-btn next eds-button eds-button--primary eds-button--normal"
                                >
                                    <span data-v-2e4150da>
                                        <a
                                            href="/vn-onboarding/form3"
                                            style={{
                                                color: "white",
                                            }}
                                        >
                                            Tiếp theo
                                        </a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
