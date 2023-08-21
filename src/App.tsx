import { Toaster } from "react-hot-toast";
import "./app.css";
import RouterProvider from "@/providers/router.provirder";
import QueryClientProvider from "@/providers/query-client.provider";
import { AppContextProvider } from "./context/app.context";

const App = () => {
    return (
        <QueryClientProvider>
            <AppContextProvider>
                <RouterProvider />
                <Toaster position="bottom-center" />
            </AppContextProvider>
        </QueryClientProvider>
    );
};

export default App;
