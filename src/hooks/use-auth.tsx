import axios from "@/configs/axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AppContext } from "../context/app.context";

const cookies = new Cookies(null, { path: "/" });

const useAuth = () => {
    const { setUser } = useContext(AppContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkValidityOfToken = async () => {
        try {
            await axios.get("/todo-list/list");
            
            const userData = cookies.get("auth-user") as undefined | User;
            setUser(userData ?? null);

            setIsLoggedIn(true);
        } catch (e) {
            navigate("/login");
        }
    };

    useEffect(() => {
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
