import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import { CanceledError } from "axios";

interface Genere {
    id : number;
    name: string;
}

interface FetchGeneresResponse {
    count: number;
    results: Genere[];
}

const useGeneres = () => {
        const [generes, setGeneres] = useState<Genere[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          
          const controller = new AbortController();   
      
          setLoading(true);
          apiClient
            .get<FetchGeneresResponse>("/genres", {signal: controller.signal})    
            .then((res) => {
              setGeneres(res.data.results);
              setLoading(false);
            })
            .catch((err) => {
              if(err instanceof CanceledError) return;
              setError(err.message)
              setLoading(false);
            });   
      
          return () => controller.abort();
        }, []);
      
        return { generes, error, isLoading };
}

export default useGeneres;