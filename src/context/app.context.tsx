import { Reducer, createContext, useReducer } from "react";
import { AppActions, AppContextProviderProps, AppState, TodoContextType } from "./types";

export const AppContext = createContext({} as TodoContextType);

const initialState: AppState = {
    user: null,
    theme: "dark",
};

const reducer: Reducer<AppState, AppActions> = (state, action) => {
    switch (action.type) {
        case "theme-toggle": {
            const rootElement = document.querySelector("html") as HTMLHtmlElement;

            if (state.theme === "light") {
                localStorage.setItem("app-theme", "dark");
                rootElement.classList.add("dark");
                return { ...state, theme: "dark" };
            } else {
                localStorage.setItem("app-theme", "light");
                rootElement.classList.remove("dark");
                return { ...state, theme: "light" };
            }
        }
        case "theme-init": {
            const rootElement = document.querySelector("html") as HTMLHtmlElement;
            const lastTheme = localStorage.getItem("app-theme");

            if (!lastTheme) {
                localStorage.setItem("app-theme", "light");
                return { ...state, theme: "light" };
            }

            if (lastTheme === "dark") {
                rootElement.classList.add("dark");
                return { ...state, theme: "dark" };
            } else {
                return { ...state, theme: "light" };
            }
        }
        case "user-set": {
            return { ...state, user: action.payload };
        }
        default:
            return state;
    }
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
            value={{
                theme: state.theme,
                user: state.user,
                toggleTheme: () => dispatch({ type: "theme-toggle" }),
                initTheme: () => dispatch({ type: "theme-init" }),
                setUser: (user) => dispatch({ type: "user-set", payload: user }),
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
