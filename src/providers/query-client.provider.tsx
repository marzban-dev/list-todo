import { QueryClient, QueryClientProvider as QueryProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";

type QueryClientProviderProps = {
    children: React.ReactNode;
};

const QueryClientProvider: React.FC<QueryClientProviderProps> = ({ children }) => {
    const client = useRef(new QueryClient());

    return (
        <QueryProvider client={client.current}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryProvider>
    );
};

export default QueryClientProvider;
