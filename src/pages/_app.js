import "../styles/globals.scss";

// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />

            {/* <ReactQueryDevtools position="bottom-right" /> */}
        </QueryClientProvider>
    );
}

export default MyApp;
