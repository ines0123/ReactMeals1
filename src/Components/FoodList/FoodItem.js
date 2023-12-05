import React, { useContext, useState } from "react";
import './FoodItem.css'
import { FoodContext } from "../../Contexts/FoodContext";
function FoodItem({foodItem}){

  const {foodItems,setFoodItems} = useContext(FoodContext)
  const [inputAmount, setInputAmount] = useState(0);

  function AddAmount(){
    const updatedFoodItems = [...foodItems];
    const itemIndex = updatedFoodItems.findIndex((item) => item.name === foodItem.name);
    updatedFoodItems[itemIndex].amount +=  parseInt(inputAmount);
    setFoodItems(updatedFoodItems);
  }
  const handleInputChange = (event) => {
    setInputAmount(event.target.value);
  };

  return(
    <React.Fragment>
    <div className="food-item">
      <div className="food-group left">
      <h4>{foodItem.name}</h4>
      <p>{foodItem.description}</p>
        <h4 className="food-price">{foodItem.price + "$"} </h4>
      </div>
     
      <div className="food-group right">
      <p><strong>Amount : </strong>
      <input
          className="food-input"
          type="number"
          value={inputAmount}
          onChange={handleInputChange}
          min={0}
        />
      </p>
      <button className="food-button" onClick={AddAmount} >+Add</button>
      </div>
    </div>
    <hr className="horizontal-line" />
    </React.Fragment>
  )
}

export default FoodItem;