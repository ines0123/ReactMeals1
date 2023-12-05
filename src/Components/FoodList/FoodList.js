import React, { useContext } from "react";
import FoodItem from "./FoodItem"
import './FoodList.css'
import { FoodContext } from "../../Contexts/FoodContext";

function FoodList(){
  const {foodItems} = useContext(FoodContext);
  return(
     <div className="food-list">
        <FoodItem foodItem={foodItems[0]} />
        <FoodItem foodItem={foodItems[1]}/>
        <FoodItem foodItem={foodItems[2]} />
        <FoodItem foodItem={foodItems[3]}/>
     </div>
  )
}

export default FoodList;