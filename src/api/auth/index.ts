import axios from "@/configs/axios";
import { LoginRequestParams, LoginResponse } from "./types";

export const login = async (params: LoginRequestParams) => {
    const response = await axios.post<LoginResponse>("/login", params);
    return response.data;
};

export const logout = async () => {
    await axios.get("/logout");
};
