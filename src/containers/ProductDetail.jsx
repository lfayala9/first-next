import React from 'react';
import ProductInfo from '../components/ProductInfo';
import style from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
  return (
    <aside className={style.ProductDetail}>
      <div className="ProductDetail-close">{/* <img src="./icons/icon_close.png" alt="close" /> */}</div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
