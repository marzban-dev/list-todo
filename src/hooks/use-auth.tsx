import axios from "@/configs/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkValidityOfToken = async () => {
        try {
            await axios.get("/todo-list/list");
            setIsLoggedIn(true);
        } catch (e) {
            navigate("/login");
        }
    };

    useEffect(() => {
        const cookies = new Cookies(null, { path: "/" });
        const authToken = cookies.get("auth-token");

        if (authToken) {
            checkValidityOfToken();
        } else {
            navigate("/login");
        }
    }, []);

    return isLoggedIn;
};

export default useAuth;
