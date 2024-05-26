import React, {useContext} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {


  const {cartItem , addToCart , removeFromCart} = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-image-container">
        <img src={image} alt="" className="item-img" />
        <p className="item-price">${price}</p>
      </div>
      <div className="item-info">
        <div className="item-rating-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="item-description">{description}</p>
        {!cartItem[id] ? (
          <button onClick={() => addToCart(id)}>
            Add to Cart
          </button>
        ) : (
          <div className="item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() =>addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
