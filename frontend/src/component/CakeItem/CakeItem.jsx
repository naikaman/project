import React, { useContext} from 'react'
import './CakeItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const CakeItem = ({id,name,price,description,image}) => {
  const {cartItem,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='cake_item'>
      <div className="cake_item_img_container">
        <img src={image} alt="" className="cake_item_image" />
        {
          !cartItem[id]
          ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div className='cake_item_counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="cake_item_info">
        <div className="cake_item_name_rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="cake_item_desc">{description}</p>
        <p className="cake_item_price">rs{price}</p>
      </div>
    </div>
  )
}

export default CakeItem
