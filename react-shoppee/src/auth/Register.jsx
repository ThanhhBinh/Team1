import React, { useState } from "react";
import { userApi } from "../api/userApi";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Kiểm tra email trước khi đăng ký
            const emailCheck = await userApi.checkEmail(formData.email);
            if (emailCheck.exists) {
                alert("Email đã tồn tại. Vui lòng sử dụng email khác.");
                return;
            }

            // Đăng ký người dùng
            await userApi.register(formData);

            alert("Đăng ký thành công!");
        } catch (error) {
            console.error(error);
            alert("Đăng ký thất bại!");
        }
    };

    return (
        <div>
            <nav className="DtnBvw">
                <div className="uJE9o2">
                    <div className="BUFbnV">
                        <a className="Gaujs8" href="/">
                            <img
                                className="logo-login-e"
                                src="assets/img/logo/shopee-logo1.png"
                                alt="a"
                            />
                        </a>
                        <div className="S9AO00">Đăng ký</div>
                    </div>
                    <a
                        href="https://help.shopee.vn/vn/s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aSJqEv"
                    >
                        Bạn cần giúp đỡ?
                    </a>
                </div>
            </nav>
            <div style={{ backgroundColor: "rgb(238, 78, 46)" }}>
                <div
                    className="IEKwEi wgttbH"
                    style={{
                        backgroundImage:
                            'url("https://down-vn.img.susercontent.com/file/sg-11134004-7rdyv-ly0k8p7r473d50")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                >
                    <div className="YiuE0t">
                        <div className="WDla1u" />
                        <div>
                            <div className="AG8zPN scPSWV">
                                <div className="WYUsbN">
                                    <div className="Rcb5be">
                                        <div className="Vw8EiR">Đăng ký</div>
                                    </div>
                                </div>
                                <div className="GNOKX7">
                                    <div />
                                    <form onSubmit={handleSubmit}>
                                        <div className="F8zDuW">
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="text"
                                                    placeholder="Tên người dùng"
                                                    autoComplete="on"
                                                    name="username"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="email"
                                                    placeholder="Email"
                                                    autoComplete="on"
                                                    name="email"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    autoComplete="on"
                                                    name="password"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <button
                                                className="vvOL40 iesrPs AsFRg8 qCI4rz ZKayWA AnY7KS"
                                                type="submit"
                                                style={{ marginBottom: "20px" }}
                                            >
                                                Tiếp theo
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="UbljBq">
                                    <div className="P9drEz HYzyIh">
                                        Bạn đã có tài khoản?
                                        <a
                                            className="VmgVc8"
                                            href="/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
                                            Đăng nhập
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
