import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrders from '@containers/MyOrders';
import AppContext from '@context/AppContext';
import style from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  return (
    <nav className={style.Nav}>
      <Image src={menu} alt="menu" className={style.menu} />
      <div className={style['navbar-left']}>
        <Image src={logo} alt="logo" className={style['nav-logo']} />
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={style['navbar-right']}>
        <ul>
          <li onClick={handleToggle} className={style['navbar-email']}>
            Luis
          </li>
          <li onClick={() => setToggleOrders(!toggleOrders)} className={style['navbar-shopping-cart']}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrders toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </nav>
  );
};

export default Header;
