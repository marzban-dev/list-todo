export type AppState = {
    theme: string;
};

type ToggleAction = {
    type: "toggle";
};

type InitAction = {
    type: "init";
};

export type AppActions = ToggleAction | InitAction;

export type AppContextProviderProps = {
    children: React.ReactNode;
};

export type TodoContextType = {
    theme: string;
    toggleTheme: () => void;
    initTheme: () => void;
};
