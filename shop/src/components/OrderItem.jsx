import React, { useContext } from 'react';
import close from '@icons/icon_close.png';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import style from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, ids }) => {
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={style.OrderItem}>
      <figure>
        <Image width={70} height={70} src={product.image} alt="bike" />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className="close" src={close} alt="close" onClick={() => handleRemove(ids)} />
    </div>
  );
};

export default OrderItem;
