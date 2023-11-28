import React from "react";
import './FoodItemCart.css'

function FoodItemCart(props) {
    const foodItem = props.food;
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    return (
        <>
            <div className="food-item-cart">
                <div className="food-group left">
                    <h5>{foodItem.name}</h5>
                    <h5 className="food-price">{foodItem.price + "$"} </h5>
                </div>
                <div className="food-group center">
                    <h5>{foodItem.amount}</h5>
                </div>
                <div className="food-group right">
                    <button onClick={onRemove} className="addbutton"><strong>-</strong></button>
                    <button onClick={onAdd} className="addbutton"><strong>+</strong></button>
                </div>
            </div>
            <hr className="horizontal-line-cart"/>
        </>
    );
}

export default FoodItemCart;
