import React, {useContext} from 'react';
import './Navbar.css'; // Create a CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FoodContext } from "../../Contexts/FoodContext";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  const { foodItems } = useContext(FoodContext);
  const totalItems = foodItems.reduce((total, item) => total + item.amount, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger custom-navbar">
      <div className="container-fluid d-flex align-items-center">
        {/* ReactMeals title on the left */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand" href="#">
          ReactMeals
        </a>

        {/* Your Cart container on the right */}
        <div className="cart-container d-flex align-items-center">
          {/* Cart logo on the left */}
          <IoMdCart style={{ color: 'white' }} />
          {/* Your Cart title */}
          <div className="cart-title ml-2 text-white">Your Cart</div>

          {/* Red rectangle with the number of items on the right */}
          <div className="cart-items-container">
            <div className="cart-items bg-danger text-light">{totalItems}</div>
          </div>

        </div>
      </div>
    </nav>

  );
};


export default Navbar;
