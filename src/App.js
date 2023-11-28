import "./App.css";
import FoodList from "./Components/FoodList/FoodList";
import Popup from "./Components/PopUp/PopUp";
import React, { useState,useContext } from "react";
import { FoodContext } from "./Contexts/FoodContext";


function App() {
  const foods = useContext(FoodContext).foodItems;
  const [Clicked, setClicked] = useState(false);
  const handleClick = (event) => {
    if (event.target.className === 'popuppp')
      setClicked(true); 
    if (event.target.className === 'popup')
      setClicked(false)
  };
  const total = () =>
  {
    let sum = 0;
    foods.map((food) => (sum += food.amount));
    return sum;
  }

  return (
    <div onClick={handleClick}>
      <p className="popuppp" style={{backgroundColor : "white"}} > 
        Click this to get popup {total()}
      </p>
      {Clicked && <Popup Click={Clicked} handleClick={handleClick}></Popup>}
      <FoodList />
    </div>
  );
}

export default App;
