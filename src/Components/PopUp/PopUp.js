import React, { useContext} from "react";
import "./PopUp.css";
import { FoodContext } from "../../Contexts/FoodContext";
import FoodItemCart from "./FoodItemCart";
function Popup() {
  const foods = useContext(FoodContext).foodItems;
  const setFoods = useContext(FoodContext).setFoodItems;
    const Addamount = (food) => {
    const index = foods.indexOf(food);
    const copyfoods = [...foods];
    copyfoods[index].amount = parseInt(copyfoods[index].amount) + 1;
    setFoods(copyfoods);
  };
  const Subamount = (food) => {
    const index = foods.indexOf(food);
    const copyfoods = [...foods];
    copyfoods[index].amount = parseInt(copyfoods[index].amount) - 1;
    setFoods(copyfoods);
  };
  const totalprice = () =>
  {
    let sum = 0;
    foods.map((food) => (sum += food.amount*food.price));
    return sum;
  }
  // 3 numbers after decimal point
  const finaltotalprice = totalprice().toFixed(3);
  return (
    <>
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup_inneritem" style={{textAlign : "center"}}>Cart</h1>
          <ul className="popup_inneritem">
            {foods.map((food) => (
              food.amount > 0 &&
              <>
                <FoodItemCart
                  food = {food}
                  onAdd={() => Addamount(food)}
                  onRemove={() => Subamount(food)}
import React from 'react';
import './PopUp.css'; // Your Popup CSS file

const Popup = ({ isOpen, togglePopup }) => {
    if (!isOpen) {
        return null; // If not open, don't render anything
    }

    return (
        <div className="popup-background">
            <div className="popup-content">
                {/* popup content */}
                <button onClick={togglePopup} className="food-button">Close</button>
            </div>
        </div>
    );
};

export default Popup;

                  className="popup_inneritem"
                />
              </>
            ))}
          </ul>
          <h2 className="foodprice" style={{textAlign : "center"}}>Total : {finaltotalprice}$</h2>
          <input type="button" value="Checkout" className="foodbutton" />
        </div>
      </div>
    </>
  );
}
export default Popup;