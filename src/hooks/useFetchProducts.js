import { useState, useEffect } from "react";

import axios from "axios";

const useFetchProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        let result = response.data;
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return { data };
};

export default useFetchProducts;
