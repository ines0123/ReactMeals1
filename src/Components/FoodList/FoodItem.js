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
      <h3>{foodItem.name}</h3>
      <h3 className="food-price">{foodItem.price + "$"} </h3>
      <p>{foodItem.description}</p>
      </div>
     
      <div className="food-group right">
      <p><strong>Amount : </strong>{foodItem.amount}</p>
      <input
          className="food-input"
          type="number"
          value={inputAmount}
          onChange={handleInputChange}
        />
      <button className="food-button" onClick={AddAmount} >+Add</button>
      </div>
    </div>
    <hr className="horizontal-line" />
    </React.Fragment>
  )
}

export default FoodItem;