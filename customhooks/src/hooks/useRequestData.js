import { useState, useEffect } from "react";
import axios from "axios";

export default function useResquestData (baseUrl, path){

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    //consumindo dados de api
    //const [nomes, setNomes] = useState()
  
    useEffect(() => {
        setIsLoading(true);
    axios
      .get(`${baseUrl}${path}`)
      .then((response) => {
        setDados(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        //console.log(error);
        setError(true);
      });
  }, []);

    return [dados, isLoading, error]

}