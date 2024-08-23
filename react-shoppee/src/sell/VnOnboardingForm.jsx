import React, { useState } from "react";
export default function VnOnboardingForm() {
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
                    <div className="onboarding-steps">
                        <div className="onboarding-steps__wrap">
                            <div className="onboarding-steps__item">
                                <div className="eds-step">
                                    <div className="eds-step__head-dot" />
                                    <div className="eds-step__tail" />
                                    <div className="eds-step__content">
                                        Thông tin Shop
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-steps__item">
                                <div className="eds-step">
                                    <div className="eds-step__head-dot" />
                                    <div className="eds-step__tail" />
                                    <div className="eds-step__content">
                                        Cài đặt vận chuyển
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-steps__item">
                                <div className="eds-step">
                                    <div className="eds-step__head-dot" />
                                    <div className="eds-step__tail" />
                                    <div className="eds-step__content">
                                        Thông tin thuế
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                            <div className="onboarding-steps__item">
                                <div className="eds-step">
                                    <div className="eds-step__head-dot" />
                                    <div className="eds-step__tail" />
                                    <div className="eds-step__content">
                                        Thông tin định danh
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                            <div className="onboarding-steps__item">
                                <div className="eds-step">
                                    <div className="eds-step__head-dot" />
                                    <div className="eds-step__content">
                                        Hoàn tất . . . . .
                                    </div>
                                    {/* Không cần thanh nối ở bước cuối cùng */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-v-37cbddb4
                        className="onboarding-steps onboarding-steps-form"
                    >
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
                                        editable={1}
                                        page_id={29039}
                                        required="required"
                                        maxLength={30}
                                        rules="[object Object],[object Object]"
                                        show-word-limit="true"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291101_c~form-itemId"
                                        prop="form_0_component_291101_c"
                                        componentid="form_0_component_291101_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                            editable={1}
                                            page_id={29039}
                                            maxLength={30}
                                            show-word-limit="true"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291101_c~form-itemId"
                                            componentid="form_0_component_291101_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291101_c"
                                                className="eds-form-item__label"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Tên Shop
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
                                                            label="Tên Shop"
                                                            page_id={29039}
                                                            required="required"
                                                            maxLength={30}
                                                            rules="[object Object],[object Object]"
                                                            show-word-limit="true"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291101_cId"
                                                            prop="form_0_component_291101_c"
                                                            componentid="form_0_component_291101_c"
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
                                                                label="Tên Shop"
                                                                page_id={29039}
                                                                rules="[object Object],[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291101_cId"
                                                                prop="form_0_component_291101_c"
                                                                componentid="form_0_component_291101_c"
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
                                                                        placeholder="truong_giang.01"
                                                                        resize="vertical"
                                                                        rows={2}
                                                                        minrows={
                                                                            2
                                                                        }
                                                                        required="required"
                                                                        maxLength={
                                                                            30
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
                                                                    ></div>
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
                                        editable={2}
                                        page_id={29043}
                                        required="required"
                                        getshopaddress="function () { [native code] }"
                                        getshopaddressid="function () { [native code] }"
                                        region="vn"
                                        rules="[object Object]"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291102_c~form-itemId"
                                        prop="form_0_component_291102_c"
                                        componentid="form_0_component_291102_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                            editable={2}
                                            page_id={29043}
                                            getshopaddress="function () { [native code] }"
                                            getshopaddressid="function () { [native code] }"
                                            region="vn"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291102_c~form-itemId"
                                            componentid="form_0_component_291102_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291102_c"
                                                className="eds-form-item__label"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Địa chỉ lấy hàng
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
                                                        <div className="pickup-address">
                                                            <button
                                                                type="button"
                                                                className="eds-button eds-button--normal"
                                                                onClick={
                                                                    togglePopup
                                                                }
                                                            >
                                                                <span>
                                                                    + Thêm
                                                                </span>
                                                            </button>

                                                            {showPopup && (
                                                                <div className="popup">
                                                                    <div className="popup-content">
                                                                        <span>
                                                                            Đây
                                                                            là
                                                                            nội
                                                                            dung
                                                                            của
                                                                            bảng
                                                                            nhỏ
                                                                        </span>
                                                                        <button
                                                                            className="close-popup"
                                                                            onClick={
                                                                                togglePopup
                                                                            }
                                                                        >
                                                                            Đóng
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
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
                                        editable={2}
                                        page_id={29047}
                                        required="required"
                                        maxLength={128}
                                        region="vn"
                                        rules="[object Object],[object Object]"
                                        show_word_limit="true"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291103_c~form-itemId"
                                        prop="form_0_component_291103_c"
                                        componentid="form_0_component_291103_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                            editable={2}
                                            page_id={29047}
                                            maxLength={128}
                                            region="vn"
                                            show_word_limit="true"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291103_c~form-itemId"
                                            componentid="form_0_component_291103_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291103_c"
                                                className="eds-form-item__label"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Email
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
                                                            label="Email"
                                                            page_id={29047}
                                                            required="required"
                                                            maxLength={128}
                                                            region="vn"
                                                            rules="[object Object],[object Object]"
                                                            show_word_limit="true"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291103_cId"
                                                            prop="form_0_component_291103_c"
                                                            componentid="form_0_component_291103_c"
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
                                                                label="Email"
                                                                page_id={29047}
                                                                region="vn"
                                                                rules="[object Object],[object Object]"
                                                                show_word_limit="true"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291103_cId"
                                                                prop="form_0_component_291103_c"
                                                                componentid="form_0_component_291103_c"
                                                                rendercomponent="[object Object]"
                                                                renderinslotname="default"
                                                                renderinscope="[object Object]"
                                                                parentrenderercontext="[object Object]"
                                                                rootrenderercontext="[object Object]"
                                                            >
                                                                <div
                                                                    data-v-0ea4e9de
                                                                    className="eds-input__inner disabled eds-input__inner--normal"
                                                                >
                                                                    {/**/}
                                                                    <input
                                                                        data-v-0ea4e9de
                                                                        type="text"
                                                                        placeholder="nguyentruonggiangmc113@gmail.com"
                                                                        disabled="disabled"
                                                                        resize="vertical"
                                                                        rows={2}
                                                                        minrows={
                                                                            2
                                                                        }
                                                                        required="required"
                                                                        maxLength={
                                                                            128
                                                                        }
                                                                        restrictiontype="input"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        className="eds-input__input"
                                                                    />
                                                                    {/**/}
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
                                        className="onboarding-phone-vcode-input"
                                        extra
                                        label="Số điện thoại"
                                        page_id={29051}
                                        required="required"
                                        fieldkey="phone"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291104_cId"
                                        prop="form_0_component_291104_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            className="onboarding-form-item"
                                            rules="[object Object],[object Object]"
                                            prop="form_0_component_291104_c.phone"
                                            page_id={29051}
                                            required="required"
                                            fieldkey="phone"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291104_cId"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                        >
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                                page_id={29051}
                                                fieldkey="phone"
                                                rootcontext="[object Object]"
                                                id="form_0_component_291104_cId"
                                                rendercomponent="[object Object]"
                                                parentrenderercontext="[object Object]"
                                                rootrenderercontext="[object Object]"
                                                extra
                                            >
                                                <label
                                                    data-v-b0f09100
                                                    htmlFor="form_0_component_291104_c.phone"
                                                    className="eds-form-item__label"
                                                >
                                                    <span
                                                        data-v-b0f09100
                                                        className="eds-form-item__reqiured"
                                                    >
                                                        *
                                                    </span>
                                                    Số điện thoại
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
                                                            data-v-b0f09100
                                                            className="onboarding-phone-input"
                                                        >
                                                            <div
                                                                data-v-b0f09100
                                                            >
                                                                +84396113106
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
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="onboarding-layout__footer-form">
                        <div data-v-37cbddb4 className="footer-form-boarding">
                            <div data-v-37cbddb4>
                                <button
                                    data-v-2e4150da
                                    data-v-37cbddb4
                                    type="button"
                                    className="action-btn save eds-button eds-button--normal-formboarding"
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
                                            "/vn-onboarding/form1")
                                    }
                                    className="action-btn next eds-button eds-button--primary eds-button--normal"
                                >
                                    <span data-v-2e4150da>
                                        <a
                                            href="/vn-onboarding/form1"
                                            style={{ color: "white" }}
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
