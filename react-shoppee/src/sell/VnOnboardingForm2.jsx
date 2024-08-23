import React, { useState } from "react";
export default function VnOnboardingForm2() {
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
                                        Việc thu thập Thông Tin Thuế và Thông
                                        Tin Định Danh là bắt buộc theo quy định
                                        của Luật an ninh mạng, Thương mại điện
                                        tử và Thuế của Việt Nam. Thông Tin Thuế
                                        và Thông Tin Định Danh sẽ được bảo vệ
                                        theo chính sách bảo mật của Shopee.
                                        Người bán hoàn toàn chịu trách nhiệm về
                                        tính chính xác của thông tin.
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
                                        page_id={29059}
                                        required="required"
                                        rules="[object Object]"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291301_c~form-itemId"
                                        prop="form_0_component_291301_c"
                                        componentid="form_0_component_291301_c"
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
                                            page_id={29059}
                                            rootcontext="[object Object]"
                                            id="form_0_component_291301_c~form-itemId"
                                            componentid="form_0_component_291301_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291301_c"
                                                className="eds-form-item__label"
                                            >
                                                <span
                                                    data-v-b0f09100
                                                    className="eds-form-item__reqiured"
                                                >
                                                    *
                                                </span>
                                                Loại hình kinh doanh
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
                                                            label="Loại hình kinh doanh"
                                                            page_id={29059}
                                                            required="required"
                                                            rules="[object Object]"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291301_cId"
                                                            prop="form_0_component_291301_c"
                                                            componentid="form_0_component_291301_c"
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
                                                                label="Loại hình kinh doanh"
                                                                page_id={29059}
                                                                required="required"
                                                                rules="[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291301_cId"
                                                                prop="form_0_component_291301_c"
                                                                componentid="form_0_component_291301_c"
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
                                                                        label="Cá nhân"
                                                                        link_component_ids="form_0_component_291307_c"
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
                                                                            Cá
                                                                            nhân
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    data-v-58f10567
                                                                >
                                                                    <label
                                                                        data-v-83018650
                                                                        className="eds-radio onboarding-radio__item"
                                                                        label="Hộ kinh doanh"
                                                                        link_component_ids="form_0_component_291302_c,form_0_component_291306_c,form_0_component_291308_c"
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
                                                                            Hộ
                                                                            kinh
                                                                            doanh
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    data-v-58f10567
                                                                >
                                                                    <label
                                                                        data-v-83018650
                                                                        className="eds-radio onboarding-radio__item"
                                                                        label="Công ty"
                                                                        link_component_ids="form_0_component_291302_c,form_0_component_291306_c,form_0_component_291308_c"
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
                                                                            Công
                                                                            ty
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
                                    {/**/}
                                    <div
                                        data-v-279758f5
                                        className="vn-address"
                                        page_id={29067}
                                        region="vn"
                                        rules="[object Object]"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291303_cId"
                                        componentid="form_0_component_291303_c"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-279758f5
                                            className="onboarding-form-item address-form-item muti"
                                            prop="form_0_component_291303_c.address_muti"
                                            required="required"
                                            rules="[object Object]"
                                            page_id={29067}
                                            region="vn"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291303_cId"
                                            componentid="form_0_component_291303_c"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                        >
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                                page_id={29067}
                                                region="vn"
                                                rootcontext="[object Object]"
                                                id="form_0_component_291303_cId"
                                                componentid="form_0_component_291303_c"
                                                parentrenderercontext="[object Object]"
                                                rootrenderercontext="[object Object]"
                                                extra
                                            >
                                                <label
                                                    data-v-b0f09100
                                                    htmlFor="form_0_component_291303_c.address_muti"
                                                    className="eds-form-item__label"
                                                >
                                                    <span
                                                        data-v-b0f09100
                                                        className="eds-form-item__reqiured"
                                                    >
                                                        *
                                                    </span>
                                                    Địa chỉ đăng ký kinh doanh
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
                                                            data-v-2c13d262
                                                            data-v-279758f5
                                                            className="seller-address-common-multiple-level-box eds-dropdown"
                                                            data-v-b0f09100
                                                        >
                                                            <div
                                                                data-v-2c13d262
                                                                className="multiple-level-label"
                                                            >
                                                                <div
                                                                    data-v-2c13d262
                                                                    title="Gia Lai / Huyện Chư Păh / Xã Ia Nhin"
                                                                    className="text-overflow multiple-level-selector-label"
                                                                >
                                                                    Gia Lai /
                                                                    Huyện Chư
                                                                    Păh / Xã Ia
                                                                    Nhin
                                                                </div>{" "}
                                                                <i
                                                                    data-v-c3cf29f8
                                                                    className="multiple-level-selector-icon eds-icon"
                                                                    data-v-2c13d262
                                                                >
                                                                    <svg
                                                                        viewBox="0 0 1024 1024"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path d="M160 288a32 32 0 0 0-23.6 53.6l352 384A32.11 32.11 0 0 0 512 736a32.39 32.39 0 0 0 23.6-10.3l352-383a32 32 0 0 0-47.1-43.3L512 656.7 183.64 298.4A32 32 0 0 0 160 288z" />
                                                                    </svg>
                                                                </i>
                                                            </div>{" "}
                                                            <div
                                                                data-v-0935b9f0
                                                                data-v-7e76b0d8
                                                                className="eds-popper seller-address-common-multiple-level-content"
                                                                data-v-2c13d262
                                                                style={{
                                                                    display:
                                                                        "none",
                                                                }}
                                                            >
                                                                <ul
                                                                    data-v-7e76b0d8
                                                                    className="eds-dropdown-menu"
                                                                    style={{
                                                                        maxWidth: 440,
                                                                    }}
                                                                >
                                                                    <ul className="multiple-level-title">
                                                                        <li
                                                                            className="multiple-level-title-item multiple-level-title-item--selected"
                                                                            style={{
                                                                                width: "33.3%",
                                                                            }}
                                                                        >
                                                                            Tỉnh/Thành
                                                                            phố
                                                                        </li>
                                                                        <li
                                                                            className="multiple-level-title-item multiple-level-title-item--selected"
                                                                            style={{
                                                                                width: "33.3%",
                                                                            }}
                                                                        >
                                                                            Quận/Huyện
                                                                        </li>
                                                                        <li
                                                                            className="multiple-level-title-item multiple-level-title-item--active"
                                                                            style={{
                                                                                width: "33.3%",
                                                                            }}
                                                                        >
                                                                            Phường/Xã
                                                                        </li>
                                                                    </ul>{" "}
                                                                    <ul className="multiple-level-items">
                                                                        <li className="multiple-level-item">
                                                                            Thị
                                                                            Trấn
                                                                            Ia
                                                                            Ly
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Thị
                                                                            Trấn
                                                                            Phú
                                                                            Hòa
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Chư
                                                                            Đăng
                                                                            Ya
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Hà
                                                                            Tây
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Hòa
                                                                            Phú
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Ia
                                                                            Ka
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Ia
                                                                            Khươl
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Ia
                                                                            Kreng
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Ia
                                                                            Mơ
                                                                            Nông
                                                                        </li>
                                                                        <li className="multiple-level-item multiple-level-item--active">
                                                                            Xã
                                                                            Ia
                                                                            Nhin
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Ia
                                                                            Phí
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Nghĩa
                                                                            Hòa
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Nghĩa
                                                                            Hưng
                                                                        </li>
                                                                        <li className="multiple-level-item">
                                                                            Xã
                                                                            Đăk
                                                                            Tơ
                                                                            Ver
                                                                        </li>
                                                                    </ul>
                                                                </ul>
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
                                            data-v-279758f5
                                            className="onboarding-form-item address-form-item detail"
                                            prop="form_0_component_291303_c.address_detail"
                                            rules="[object Object]"
                                            page_id={29067}
                                            region="vn"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291303_cId"
                                            componentid="form_0_component_291303_c"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                        >
                                            <div
                                                data-v-b0f09100
                                                className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                                page_id={29067}
                                                region="vn"
                                                rootcontext="[object Object]"
                                                id="form_0_component_291303_cId"
                                                componentid="form_0_component_291303_c"
                                                parentrenderercontext="[object Object]"
                                                rootrenderercontext="[object Object]"
                                                extra
                                            >
                                                <label
                                                    data-v-b0f09100
                                                    htmlFor="form_0_component_291303_c.address_detail"
                                                    className="eds-form-item__label"
                                                />
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__control"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="eds-form-item__content"
                                                    >
                                                        <div
                                                            data-v-0ea4e9de
                                                            data-v-279758f5
                                                            className="eds-input eds-input__area address-input"
                                                            data-v-b0f09100
                                                        >
                                                            <textarea
                                                                data-v-0ea4e9de
                                                                type="textarea"
                                                                placeholder="Số nhà, tên đường.v.v.."
                                                                resize="vertical"
                                                                rows={2}
                                                                minrows={2}
                                                                restrictiontype="input"
                                                                max="Infinity"
                                                                min="-Infinity"
                                                                className="eds-input__inner eds-input__inner--normal"
                                                                style={{
                                                                    resize: "vertical",
                                                                    minHeight: 50,
                                                                }}
                                                                defaultValue={
                                                                    ""
                                                                }
                                                            />
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
                                                            {/**/}
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
                                    </div>
                                    <div
                                        data-v-525bb752
                                        className="field-group"
                                        page_id={29071}
                                        id="form_0_component_291304_cId"
                                        prop="form_0_component_291304_c"
                                        componentid="form_0_component_291304_c"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <p data-v-525bb752 className="label">
                                            <span
                                                data-v-525bb752
                                                className="shopee-form-item__reqiured"
                                            >
                                                *
                                            </span>{" "}
                                            Email nhận hóa đơn điện tử{" "}
                                        </p>
                                        <div
                                            data-v-525bb752
                                            className="field-group__core"
                                        >
                                            <div
                                                data-v-525bb752
                                                className="content"
                                            >
                                                <div
                                                    data-v-525bb752
                                                    className="content-item"
                                                >
                                                    <div
                                                        data-v-525bb752
                                                        className="item-content-simple"
                                                    >
                                                        <div
                                                            data-v-4c029a7cc
                                                            data-v-525bb752
                                                            className="abstract-form item-form"
                                                        >
                                                            <div
                                                                data-v-4c029a7c
                                                                className="formable-renderer"
                                                                data-v-5560716f
                                                            >
                                                                <div
                                                                    className="onboarding-form-item"
                                                                    editable={1}
                                                                    page_id={
                                                                        29075
                                                                    }
                                                                    required="required"
                                                                    maxLength={
                                                                        100
                                                                    }
                                                                    rules="[object Object],[object Object]"
                                                                    show-word-limit="true"
                                                                    rootcontext="[object Object]"
                                                                    id="form_0_component_291305_c~form-itemId"
                                                                    prop="form_0_component_291305_c"
                                                                    componentid="form_0_component_291305_c"
                                                                    rendercomponent="[object Object]"
                                                                    parentrenderercontext="[object Object]"
                                                                    rootrenderercontext="[object Object]"
                                                                >
                                                                    <div
                                                                        data-v-b0f09100
                                                                        className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                                                        editable={
                                                                            1
                                                                        }
                                                                        page_id={
                                                                            29075
                                                                        }
                                                                        maxLength={
                                                                            100
                                                                        }
                                                                        show-word-limit="true"
                                                                        rootcontext="[object Object]"
                                                                        id="form_0_component_291305_c~form-itemId"
                                                                        componentid="form_0_component_291305_c"
                                                                        rendercomponent="[object Object]"
                                                                        parentrenderercontext="[object Object]"
                                                                        rootrenderercontext="[object Object]"
                                                                        extra
                                                                    >
                                                                        <label
                                                                            data-v-b0f09100
                                                                            htmlFor="form_0_component_291305_c"
                                                                            className="eds-form-item__label"
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
                                                                                        className="onboarding-input"
                                                                                        extra
                                                                                        label
                                                                                        page_id={
                                                                                            29075
                                                                                        }
                                                                                        required="required"
                                                                                        maxLength={
                                                                                            100
                                                                                        }
                                                                                        rules="[object Object],[object Object]"
                                                                                        show-word-limit="true"
                                                                                        rootcontext="[object Object]"
                                                                                        id="form_0_component_291305_cId"
                                                                                        prop="form_0_component_291305_c"
                                                                                        componentid="form_0_component_291305_c"
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
                                                                                            label
                                                                                            page_id={
                                                                                                29075
                                                                                            }
                                                                                            rules="[object Object],[object Object]"
                                                                                            rootcontext="[object Object]"
                                                                                            id="form_0_component_291305_cId"
                                                                                            prop="form_0_component_291305_c"
                                                                                            componentid="form_0_component_291305_c"
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
                                                                                                    rows={
                                                                                                        2
                                                                                                    }
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
                                                                                                        32/100
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
                                                            </div>
                                                        </div>
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-525bb752>
                                                <button
                                                    data-v-2e4150da
                                                    data-v-525bb752
                                                    type="button"
                                                    className="eds-button eds-button--normal"
                                                >
                                                    <i
                                                        data-v-c3cf29f8
                                                        data-v-2e4150da
                                                        className="eds-icon"
                                                    >
                                                        <svg
                                                            viewBox="0 0 16 16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M8.482 1.5a.5.5 0 0 1 .5.5L8.98 7.997 15 7.998a.5.5 0 0 1 0 1l-6.019-.001V15a.5.5 0 0 1-1 0V8.997L2 8.998a.5.5 0 0 1 0-1l5.981-.001V2a.5.5 0 0 1 .5-.5Z"
                                                            />
                                                        </svg>
                                                    </i>
                                                    <span data-v-2e4150da>
                                                        Thêm Email (1/5)
                                                    </span>
                                                </button>
                                            </div>
                                            <p
                                                data-v-525bb752
                                                className="extra"
                                            >
                                                {" "}
                                                Hóa đơn điện tử của bạn sẽ được
                                                gửi đến địa chỉ email này{" "}
                                            </p>
                                        </div>
                                    </div>
                                    {/**/}
                                    <div
                                        className="onboarding-form-item"
                                        editable={1}
                                        page_id={29083}
                                        maxLength={14}
                                        region="vn"
                                        restrictionfunc="function () { [native code] }"
                                        rules="[object Object],[object Object]"
                                        show-word-limit="true"
                                        rootcontext="[object Object]"
                                        id="form_0_component_291307_c~form-itemId"
                                        prop="form_0_component_291307_c"
                                        componentid="form_0_component_291307_c"
                                        rendercomponent="[object Object]"
                                        parentrenderercontext="[object Object]"
                                        rootrenderercontext="[object Object]"
                                    >
                                        <div
                                            data-v-b0f09100
                                            className="eds-form-item eds-form-item--extra onboarding-form-item__inner"
                                            editable={1}
                                            page_id={29083}
                                            maxLength={14}
                                            region="vn"
                                            restrictionfunc="function () { [native code] }"
                                            show-word-limit="true"
                                            rootcontext="[object Object]"
                                            id="form_0_component_291307_c~form-itemId"
                                            componentid="form_0_component_291307_c"
                                            rendercomponent="[object Object]"
                                            parentrenderercontext="[object Object]"
                                            rootrenderercontext="[object Object]"
                                            extra="Theo Quy định về Thương mại điện tử Việt Nam (Nghị định 52/2013/ND-CP), Người Bán phải cung cấp thông tin Mã số thuế cho sàn Thương mại điện tử."
                                        >
                                            <label
                                                data-v-b0f09100
                                                htmlFor="form_0_component_291307_c"
                                                className="eds-form-item__label"
                                            >
                                                Mã số thuế
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
                                                            extra="Theo Quy định về Thương mại điện tử Việt Nam (Nghị định 52/2013/ND-CP), Người Bán phải cung cấp thông tin Mã số thuế cho sàn Thương mại điện tử."
                                                            label="Mã số thuế"
                                                            page_id={29083}
                                                            maxLength={14}
                                                            region="vn"
                                                            rules="[object Object],[object Object]"
                                                            show-word-limit="true"
                                                            rootcontext="[object Object]"
                                                            id="form_0_component_291307_cId"
                                                            prop="form_0_component_291307_c"
                                                            componentid="form_0_component_291307_c"
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
                                                                extra="Theo Quy định về Thương mại điện tử Việt Nam (Nghị định 52/2013/ND-CP), Người Bán phải cung cấp thông tin Mã số thuế cho sàn Thương mại điện tử."
                                                                label="Mã số thuế"
                                                                page_id={29083}
                                                                region="vn"
                                                                rules="[object Object],[object Object]"
                                                                rootcontext="[object Object]"
                                                                id="form_0_component_291307_cId"
                                                                prop="form_0_component_291307_c"
                                                                componentid="form_0_component_291307_c"
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
                                                                        maxLength={
                                                                            14
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
                                                                            0/14
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
                                                {/**/}
                                                <div
                                                    data-v-b0f09100
                                                    className="eds-form-item__extra"
                                                >
                                                    <div
                                                        data-v-b0f09100
                                                        className="onboarding-extra-text"
                                                    >
                                                        Theo Quy định về Thương
                                                        mại điện tử Việt Nam
                                                        (Nghị định
                                                        52/2013/ND-CP), Người
                                                        Bán phải cung cấp thông
                                                        tin Mã số thuế cho sàn
                                                        Thương mại điện tử.
                                                    </div>{" "}
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/**/}
                                    </div>
                                    {/**/}
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
                                            "/vn-onboarding/form3")
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
