import React from 'react'
import carrito from '../assets/carrito.png';
import './CartWidget.css';

export const CartWidget = () => {
  return (
     <div className="cartwidget">
      <img className="logo-cartwidget" src={carrito} alt="" />
     
    </div>
  )
}

export default CartWidget;