import React from "react";
import FoodItemCart from "./FoodItemCart";
import "./PopUp.css";
function Popup(props) {
  const foods = props.list;
  const Addamount = (food) => {
    const index = foods.indexOf(food);
    const copyfoods = [...foods];
    copyfoods[index].amount = parseInt(copyfoods[index].amount) + 1;
    props.setFoods(copyfoods.filter((food) => food.amount > 0));
  };
  const Subamount = (food) => {
    const index = foods.indexOf(food);
    const copyfoods = [...foods];
    copyfoods[index].amount = parseInt(copyfoods[index].amount) - 1;
    props.setFoods(copyfoods.filter((food) => food.amount > 0));
  };
  return (
    <>
      <div className="popup">
        <div className="popup_inner">
          <h1 className="popup_inneritem">Cart</h1>
          <ul className="popup_inneritem">
            {props.list.map((food) => (
              <>
                <FoodItemCart
                  key={food.name}
                  name={food.name}
                  price={food.price}
                  amount={food.amount}
                  onAdd={() => Addamount(food)}
                  onRemove={() => Subamount(food)}
                  className="popup_inneritem"
                />
              </>
            ))}
          </ul>
          <input type="button" value="Checkout" className="popup_inneritem" />
        </div>
      </div>
    </>
  );
}
export default Popup;
