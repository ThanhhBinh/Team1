import { axiosInstance } from "./axiosInstance";

export const bannerApi = {
    getAll(params) {
        var url = "/banners";
        return axiosInstance.get(url, { params });
    },
    get(id) {
        var url = `/banners/${id}`;
        return axiosInstance.get(url);
    },
};
