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






    // query(resource, params) {
    //     return axiosClient.get(resource, params).catch((error) => {
    //         throw new Error(`StarBank ApiService ${error}`);
    //     });
    // },

    // update(resource, slug, params) {
    //     return axiosClient.put(`${resource}/${slug}`, params);
    // },

    // put(resource, params) {
    //     return axiosClient.put(`${resource}`, params);
    // },

    // delete(resource) {
    //     return axiosClient.delete(resource).catch((error) => {
    //         throw new Error(`StarBank ApiService ${error}`);
    //     });
    // }
};

export default ApiService;

