import { Toaster } from "react-hot-toast";
import "./app.css";
import RouterProvider from "@/providers/router.provirder";
import QueryClientProvider from "@/providers/query-client.provider";

const App = () => {
    return (
        <QueryClientProvider>
            <RouterProvider />
            <Toaster position="bottom-center" />
        </QueryClientProvider>
    );
};

export default App;
