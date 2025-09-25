import { useEffect, useState } from "react";
import type { Task } from "../types/Task";

type useFetchProps = {
    url: string;
};

export default function useFetch({ url }: useFetchProps) {
    const [data, setData] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const onFetch = async () => {
            try {
                setLoading(true);
                const tasks = await fetch(url);
                const data = await tasks.json();
                setData(data);
                setError("");
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            }
            setLoading(false);
        };

        onFetch();
    }, [url]);

    return { data, error, loading };
}
