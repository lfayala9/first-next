import React, { useContext, useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrders from '@containers/MyOrders'
import AppContext from "@context/AppContext";
import style from '@styles/Header.module.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=> {
    setToggle(!toggle)
  }
  const [toggleOrders, setToggleOrders] = useState(false)
  const {state} = useContext(AppContext)

  return (
    <nav className={style.Nav}>
      <Image src={menu} alt="menu" className={style.menu} />
      <div className={style["navbar-left"]}>
        <Image src={logo} alt="logo" className={style["nav-logo"]} />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={style["navbar-right"]}>
        <ul>
          <li onClick={handleToggle} className={style["navbar-email"]}>Luis</li>
          <li onClick={()=>setToggleOrders(!toggleOrders)} className={style["navbar-shopping-cart"]}>
            <Image src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MyOrders toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
    </nav>
  );
};

export default Header;
