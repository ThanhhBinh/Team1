import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi"; // Đảm bảo userApi đã được cấu hình đúng

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.role === "Admin-web") {
                navigate("/admin"); // Sử dụng navigate để chuyển hướng nội bộ
            } else {
                navigate("/"); // Trang chính
            }
        }
    }, [navigate]);

    async function handleLogin(event) {
        event.preventDefault();
        setLoading(true);

        try {
            const data = { email, password };
            const response = await userApi.login(data);

            if (response && response.data) {
                const user = response.data;

                // So sánh mật khẩu với mật khẩu đã mã hóa từ server (nếu có)
                // Nếu bạn đang dùng MockAPI, bạn có thể bỏ qua phần so sánh mật khẩu

                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem("user", JSON.stringify(user));

                // Chuyển hướng dựa trên vai trò của người dùng
                if (user.role === "Admin-web") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                setError("Đăng nhập không thành công. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("Lỗi:", error.message);
            setError("Đăng nhập thất bại. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    }

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
                                        <div className="F71qL6">
                                            <div className="tTrrEC">
                                                Đăng nhập với mã QR
                                            </div>
                                            <a
                                                className="_t3qNI"
                                                href="/buyer/login/qr?next=https%3A%2F%2Fshopee.vn%2F"
                                            >
                                                {/* SVG */}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="GNOKX7">
                                    <div />
                                    <form onSubmit={handleLogin}>
                                        <div className="F8zDuW">
                                            <div className="gMTn3o">
                                                <input
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    className="Z7tNyT"
                                                    type="text"
                                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                                    autoComplete="on"
                                                    name="loginKey"
                                                    maxLength={128}
                                                    aria-invalid="false"
                                                />
                                            </div>
                                        </div>
                                        <div className="L2QI3a">
                                            <div className="gMTn3o">
                                                <input
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="Z7tNyT"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    autoComplete="current-password"
                                                    name="password"
                                                    maxLength={16}
                                                    aria-invalid="false"
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
                                    {error && <p>{error}</p>}{" "}
                                    {/* Hiển thị thông báo lỗi */}
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
                                        <a
                                            className="VmgVc8"
                                            href="/buyer/signup?next=https%3A%2F%2Fshopee.vn%2F"
                                        >
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
