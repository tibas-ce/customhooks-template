import { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";


export default function useCapturarPostagens (){
    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
      axios
        .get(`${BASE_URL}comments`)
        .then((response) => {
          setPostagens(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  

    return postagens

}