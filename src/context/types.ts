export type AppState = {
    theme: string;
    user: null | User;
};

type ThemeToggleAction = {
    type: "theme-toggle";
};

type ThemeInitAction = {
    type: "theme-init";
};

type SetUserAction = {
    type: "user-set";
    payload: null | User;
};

export type AppActions = ThemeToggleAction | ThemeInitAction | SetUserAction;

export type AppContextProviderProps = {
    children: React.ReactNode;
};

export type TodoContextType = {
    theme: string;
    user: User | null;
    toggleTheme: () => void;
    initTheme: () => void;
    setUser: (user: null | User) => void;
};
