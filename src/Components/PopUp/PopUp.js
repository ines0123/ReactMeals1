import React, {useContext} from "react";
import "./PopUp.css";
import {FoodContext} from "../../Contexts/FoodContext";
import FoodItemCart from "./FoodItemCart";

function Popup(props) {
    const {foodItems: foods, setFoodItems: setFoods} = useContext(FoodContext);
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
    const totalprice = () => {
        let sum = 0;
        foods.map((food) => (sum += food.amount * food.price));
        return sum;
    }
    // 3 numbers after decimal point
    const finaltotalprice = totalprice().toFixed(3);
    return (
        <>
            <div className="popup">
                <div className="popup_inner">
                    <ul className="popup_inneritem">
                        {foods.map((food) => (
                            food.amount > 0 &&
                            <>
                                <FoodItemCart
                                    food={food}
                                    onAdd={() => Addamount(food)}
                                    onRemove={() => Subamount(food)}
                                    className="popup_inneritem"
                                />
                            </>
                        ))}
                    </ul>
                    <div className="foodprice">
                        <h5>Total Amount :</h5>
                        <h5>{finaltotalprice}$</h5>
                    </div>
                    <div className="foodbuttons">
                        <button onClick={props.togglePopup} className="food-button">Close</button>
                        <input type="button" value="Order" className="food-button"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;