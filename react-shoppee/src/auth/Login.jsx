import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi";
import { setUser } from "../state/userSlice";

export default function Login() {
    const [loginData, setLoginData] = useState({
        loginKey: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Gọi API đăng nhập
            const response = await userApi.login(loginData);
            console.log("Login Response:", response);

            // Xóa thông tin người dùng cũ khỏi localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("user_id");

            // Lưu thông tin người dùng mới vào localStorage
            const user = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("user_id", user.id); // Lưu user_id vào localStorage

            // Cập nhật state hoặc context nếu cần
            setUser(user);

            // Chuyển hướng sau khi đăng nhập thành công
            navigate("/"); // Thay đổi đường dẫn theo ý muốn
            alert("Đăng nhập thành công!");
        } catch (error) {
            console.error("Login Error:", error);
            alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <nav className="DtnBvw">{/* Nội dung của nav */}</nav>
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
                                        <div className="Vw8EiR">Đăng nhập</div>
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
                                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                                    autoComplete="on"
                                                    name="loginKey"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                    value={loginData.loginKey}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="L2QI3a">
                                            <div className="gMTn3o">
                                                <input
                                                    className="Z7tNyT"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    autoComplete="current-password"
                                                    name="password"
                                                    maxLength={16}
                                                    aria-invalid="false"
                                                    value={loginData.password}
                                                    onChange={handleChange}
                                                />
                                                <button
                                                    type="button"
                                                    className="oVeLwk"
                                                >
                                                    <i className="far fa-eye"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="vvOL40 iesrPs AsFRg8 qCI4rz ZKayWA AnY7KS"
                                            disabled={loading} // Disable nút khi đang tải
                                        >
                                            {loading
                                                ? "Đang đăng nhập..."
                                                : "Đăng nhập"}
                                        </button>
                                    </form>

                                    <div className="PJtD9H">
                                        <a
                                            className="FzyRNj"
                                            href="/buyer/reset"
                                        >
                                            Quên mật khẩu
                                        </a>
                                        <a
                                            className="FzyRNj"
                                            href="/buyer/login/otp?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
                                            Đăng nhập với SMS
                                        </a>
                                    </div>
                                    <div className="utNPhR">
                                        <div className="TjJ33f">
                                            <div className="p__MPF" />
                                            <span className="mYzzJR">hoặc</span>
                                            <div className="p__MPF" />
                                        </div>
                                        <div className="fqRb47">
                                            <button className="HeiASJ Db3tXj YQU5bP">
                                                <div className="lApgO2">
                                                    <div className="vDmVU0 social-white-background social-white-fb-blue-png" />
                                                </div>
                                                <div className>Facebook</div>
                                            </button>
                                            <button className="HeiASJ Db3tXj YQU5bP">
                                                <div className="lApgO2">
                                                    <div className="vDmVU0 social-white-background social-white-google-png" />
                                                </div>
                                                <div className>Google</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="UbljBq">
                                    <div className="P9drEz HYzyIh">
                                        Bạn mới biết đến Shopee?
                                        <a className="VmgVc8" href="/register">
                                            Đăng ký
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
