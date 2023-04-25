import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
// import useGetItems from '../hooks/useGetItems';
import style from '@styles/ProductList.module.scss';
import RotateLoader from 'react-spinners/RotateLoader';

const API = 'https://fakestoreapi.com/products?offset=20&limit=12';

const ProductList = () => {
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
  }, []);
  // const products = useGetItems(API);
  return (
    <section className={style['main-container']}>
      <div className={style.ProductList}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        {isLoading && <RotateLoader color={'#acd9b2'} loading={isLoading} size={150} />}
      </div>
    </section>
  );
};

export default ProductList;
