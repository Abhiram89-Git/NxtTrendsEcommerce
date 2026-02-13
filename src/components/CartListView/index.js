import CartContext from '../../context/CartContext'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {({
      cartList,
      incrementCartItemQuantity,
      decrementCartItemQuantity,
      removeCartItem,
    }) => (
      <ul className="cart-list">
        {cartList.map(item => (
          <li key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>Price: Rs {item.price}/-</p>
            <div className="quantity-controls">
              <button
                type="button"
                data-testid="minus"
                onClick={() => decrementCartItemQuantity(item.id)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                data-testid="plus"
                onClick={() => incrementCartItemQuantity(item.id)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              data-testid="remove"
              onClick={() => removeCartItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </CartContext.Consumer>
)

export default CartListView
