import axiosModule from "axios";

const axios = axiosModule.create({
    baseURL: "https://interview.aval.dev/api",
});

axios.interceptors.request.use((config) => {
    const url = config.url;

    if (!url!.includes("auth/signin") || !url!.includes("auth/signup")) {
        config.headers.Authorization = `Bearer ${""}`;

        return config;
    }

    return config;
});

export default axios;
