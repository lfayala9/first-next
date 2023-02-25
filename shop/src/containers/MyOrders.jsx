import React, {useContext, useState} from 'react';
import Link from 'next/link'
// import { Link } from 'react-router-dom';
import Image from 'next/image';
import OrderItem from '../components/OrderItem';
import flecha from '@icons/flechita.svg'
import AppContext from '../context/AppContext'
import sumTotal from '../utils/sumTotal'
import style from '@styles/MyOrder.module.scss'


const MyOrders = ({ toggleOrders, setToggleOrders }) => {
	const {state:{cart}} = useContext(AppContext)
	
	return (
		<aside className={style.MyOrder}>
			<div 
			onClick={()=>setToggleOrders(!toggleOrders)}
			className={style["title-container"]} >
				<Image 
				src={flecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className={style["section-scroll"]}>
				{cart.map((product, ids)=>(
					<OrderItem product={product} key={`orderItem-${product.id}-${ids}`} ids={ids} />
				))}
				
				<div className={style.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal(cart)}</p>
				</div>
				<link rel="stylesheet" href="" />
				{/* <Link to='/checkout'> */}
					<Link href='/checkout'>
						<button className={style["primary-button"]}>
							Checkout
						</button>
					</Link>
				{/* </Link>  */}
			</div>
			{/* {toggle && <MyOrder setToggle={setToggle}/>} */}
		</aside>
	);
}

export default MyOrders;
