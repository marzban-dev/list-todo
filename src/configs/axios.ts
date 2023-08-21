import axiosModule from "axios";
import Cookies from "universal-cookie";

const axios = axiosModule.create({
    baseURL: "https://interview.aval.dev/api",
});

axios.interceptors.request.use((config) => {
    const url = config.url;

    const cookies = new Cookies(null, { path: "/" });
    const authToken = cookies.get("auth-token") as string;

    if (!url!.includes("auth/signin") || !url!.includes("auth/signup")) {
        config.headers.Authorization = `Bearer ${authToken}`;
        return config;
    }

    return config;
});

export default axios;
