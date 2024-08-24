import { axiosInstance } from "./axiosInstance";
const mockApiBaseUrl = "https://66bc471b24da2de7ff69d377.mockapi.io/api";

export const userApi = {
    async login(data) {
        try {
            const response = await axiosInstance.get(
                `${mockApiBaseUrl}/register`,
                {
                    params: { email: data.email, password: data.password },
                }
            );

            console.log("API Response:", response.data); // Kiểm tra dữ liệu trả về

            if (response.data.length > 0) {
                const userData = response.data[0];
                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem("user", JSON.stringify(userData));
                localStorage.setItem("user_id", userData.id); // Lưu user_id vào localStorage

                return { data: userData };
            } else {
                throw new Error("Tài khoản không tồn tại hoặc mật khẩu sai.");
            }
        } catch (error) {
            console.error("Login Error:", error); // Kiểm tra lỗi
            throw error;
        }
    },

    async register(data) {
        try {
            const response = await axiosInstance.post(
                `${mockApiBaseUrl}/register`,
                data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    async checkEmail(email) {
        try {
            const response = await axiosInstance.get(
                `${mockApiBaseUrl}/register`
            );
            const exists = response.data.some((user) => user.email === email);
            return { exists };
        } catch (error) {
            throw error;
        }
    },

    me(params) {
        const url = `${mockApiBaseUrl}/me`;
        return axiosInstance.get(url, { params });
    },
};
