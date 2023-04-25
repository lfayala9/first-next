import { useState, useEffect } from 'react';
// import axios from "axios";

const useGetItems = (API) => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      await fetch(API)
        .then((res) => res.json())
        .then((response) => {
          setProduct(response);
          setIsLoading(false);
        });
    };
    getProducts();
  }, [API]);
  if (isLoading) return <span>Cargando</span>;

  return products;
};

export default useGetItems;
