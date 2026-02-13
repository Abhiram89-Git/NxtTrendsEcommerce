import React from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {({cartList}) => {
      if (cartList.length === 0) {
        return <h1 className="empty-cart-heading">Your Cart Is Empty</h1>
      }

      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const totalItems = cartList.reduce((acc, item) => acc + item.quantity, 0)

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">Order Total</h1>
          <h1 className="total-amount">Rs {totalAmount}/-</h1>
          <p className="total-items">{totalItems} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
