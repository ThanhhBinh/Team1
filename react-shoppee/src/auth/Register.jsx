import React, { useState } from "react";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        address: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Đảm bảo rằng bạn gọi hook useNavigate
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Kiểm tra email đã đăng ký hay chưa
            const emailCheck = await userApi.checkEmail(formData.email);
            if (emailCheck.exists) {
                alert(
                    "Email này đã được đăng ký. Vui lòng sử dụng email khác."
                );
                return;
            }

            // Nếu email chưa đăng ký, tiến hành đăng ký
            const response = await userApi.register(formData);
            console.log("Register Response:", response);

            // Lưu thông tin vào localStorage
            localStorage.setItem("user", JSON.stringify(response));

            // Chuyển hướng hoặc thông báo đăng ký thành công
            alert("Đăng ký thành công!");

            // Điều hướng đến trang đăng nhập
            navigate("/login"); // Sử dụng hook useNavigate để chuyển hướng
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.");
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
                                alt="logo"
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
                                                    value={formData.username}
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
                                                    value={formData.email}
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
                                                    value={formData.password}
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
                                        <a className="VmgVc8" href="/login">
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
