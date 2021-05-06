import {useEffect, useState} from "react";

const useFetch = (url: string) : {data: any, isLoading: boolean, error: string | null} => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        //for cleanup - if we need to abort (moved to another page for example)
        const abortCtrl = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCtrl.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name !== 'AbortError') {
                        setError(err.message);
                        setIsLoading(false);
                    }
                })
        }, 1000);

        return () => abortCtrl.abort();
    }, [url])

    return {data, isLoading, error}
}

export default useFetch;
