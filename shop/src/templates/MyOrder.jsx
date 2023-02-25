import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import sumTotal from '../utils/sumTotal';
import flecha from '@icons/flechita.svg';
import style from '@styles/MyOrders.module.scss';

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  const date = new Date();
  return (
    <div className={style.Checkout}>
      <div className={style['Checkout-container']}>
        <div className={style['title-container']}>
          <img src={flecha} alt="arrow" />
          <h1 className={style['Checkout-title']}>My order</h1>
        </div>
        <div className={style['Checkout-content']}>
          {cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={index} />
          ))}
          <div className={styleorder}>
            <p className={style['order__info']}>
              <span className={style['order__date']}>
                {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
              </span>
              <span className={style['order__quantity']}>{cart.length} articles</span>
            </p>
            {/* <p className='order__total'>$ {sumTotal(cart)}</p> */}
            <p>{sumTotal(cart)}</p>
          </div>
          <button className={style['primary-button']}>PAY</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
