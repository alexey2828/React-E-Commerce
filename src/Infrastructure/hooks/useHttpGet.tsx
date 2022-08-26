import axios from "axios";
import { useEffect, useState } from "react";

interface IUseHttpGet<T> {
    data?: T | null;
    error?: Error | null;
    url: string;
    isLoading: boolean;
}

export function useHttpGet<T>({url}: any): IUseHttpGet<T> {
    const [data, setData] = useState<IUseHttpGet<T>['data']>(null);
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<IUseHttpGet<T>['isLoading']>(false);

    useEffect(() => {
        fetch();
    }, [url]);
   
    async function fetch() {
        setIsLoading(true);
        try {
          const response = await axios.get<null>(url);
          if(response.data){
            setData(response.data);
          }
        setIsLoading(false);
        } catch (e) {
            setError(e);
            setIsLoading(false);
        }
      }
    return {data, error, url, isLoading};
}
