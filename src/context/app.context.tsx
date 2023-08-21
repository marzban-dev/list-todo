import { Reducer, createContext, useReducer } from "react";
import { AppActions, AppContextProviderProps, AppState, TodoContextType } from "./types";

export const AppContext = createContext({} as TodoContextType);

const initialState: AppState = {
    theme: "light",
};

const reducer: Reducer<AppState, AppActions> = (state, action) => {
    switch (action.type) {
        case "toggle": {
            const rootElement = document.querySelector("html") as HTMLHtmlElement;

            if (state.theme === "light") {
                localStorage.setItem("app-theme", "dark");
                rootElement.classList.add("dark");
                return { theme: "dark" };
            } else {
                localStorage.setItem("app-theme", "light");
                rootElement.classList.remove("dark");
                return { theme: "light" };
            }
        }
        case "init": {
            const rootElement = document.querySelector("html") as HTMLHtmlElement;
            const lastTheme = localStorage.getItem("app-theme");

            if (!lastTheme) {
                localStorage.setItem("app-theme", "light");
                return { theme: "light" };
            }

            if (lastTheme === "dark") {
                rootElement.classList.add("dark");
                return { theme: "dark" };
            } else {
                return { theme: "light" };
            }
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
                toggleTheme: () => dispatch({ type: "toggle" }),
                initTheme: () => dispatch({ type: "init" }),
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
