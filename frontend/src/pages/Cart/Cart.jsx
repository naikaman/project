import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItem, cake_list } = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {cake_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div className="cart_items_title cart_items_item" >
                <p>{item.name}</p>
              </div>
            )
          }

        })}

      </div>
    </div>
  )
}

export default Cart