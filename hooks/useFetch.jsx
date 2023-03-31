import { useEffect, useState } from "react"
import techStoreDb from "../api/techStoreDb";

export const useFetch = ( url ) => {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);

        try {      
            const { data } = await techStoreDb.get(`${ url }`);
            console.log(data);
            setData(data);
            setIsLoading( false );

        } catch (error) {

            console.log(error);
            setError( true );
            alert('Internal Server Error');

        }finally{
            setIsLoading( false );
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        isLoading,
        data,
        error
    }
}