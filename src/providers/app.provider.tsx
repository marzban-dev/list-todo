import { useContext, useEffect } from "react";
import { AppContext } from "@/context/app.context";

type AppProviderProps = {
    children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const { initTheme } = useContext(AppContext);

    useEffect(() => {
        initTheme();
    }, []);

    return children;
};

export default AppProvider;
