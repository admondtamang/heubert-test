import useSWR from "swr";
export default function useCustomSwr(url) {
    console.log("===", url);
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(url, fetcher);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    return data;
}
