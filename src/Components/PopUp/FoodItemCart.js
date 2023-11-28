import React from "react";
import './FoodItemCart.css'
function FoodItemCart(props) {
  const foodItem = props.food;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  return(
    <React.Fragment>
    <div className="food-item">
      <div className="food-group left">
      <h3>{foodItem.name}</h3>
      <h3 className="food-price">{foodItem.price + "$"} </h3>
      <p>{foodItem.description}</p>
      </div>
     
      <div className="food-group right">
      <p><strong>Amount : </strong>{foodItem.amount}</p>
      <div className="food-group right">
      <button onClick={onAdd} className="addbutton">+</button>
      <button onClick={onRemove} className="removebutton">-</button>
      </div>
      </div>
    </div>
    <hr className="horizontal-line" />
    </React.Fragment>
  );
}
export default FoodItemCart;
