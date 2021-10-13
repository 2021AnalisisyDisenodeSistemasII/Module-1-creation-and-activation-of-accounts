import axios from "axios";
import { API_URL } from "@/common/config";

export const axiosClient = axios.create({
    baseURL: API_URL
});

const ApiService = {
    setHeader() {
        axiosClient.defaults.headers["Content-Type"] = "application/json"
    },
    post(resource, params) {
        return axiosClient.post(`${resource}`, params);
    },
    get(resource, slug = "") {
        return axiosClient.get(`${resource}/${slug}`).catch((error) => {
            throw new Error(`StarBank ApiService ${error}`);
        });
    },
};

export default ApiService;

