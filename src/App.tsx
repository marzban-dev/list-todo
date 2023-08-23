import QueryClientProvider from "@/providers/query-client.provider";
import RouterProvider from "@/providers/router.provider";
import { Toaster } from "react-hot-toast";
import "./app.css";
import { AppContextProvider } from "./context/app.context";
import AppProvider from "./providers/app.provider";

const App = () => {
    return (
        <QueryClientProvider>
            <AppContextProvider>
                <AppProvider>
                    <RouterProvider />
                    <Toaster
                        position="bottom-center"
                        toastOptions={{
                            className: "rounded-full dark:bg-secondary-500 dark:text-white",
                        }}
                    />
                </AppProvider>
            </AppContextProvider>
        </QueryClientProvider>
    );
};

export default App;
