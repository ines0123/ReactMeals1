import React from 'react';
import './Navbar.css'; // Create a CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger custom-navbar">
      <div className="container-fluid d-flex align-items-center">
        {/* ReactMeals title on the left */}
        <a className="navbar-brand" href="#">
          ReactMeals
        </a>

        {/* Your Cart container on the right */}
        <div className="cart-container d-flex align-items-center">
          {/* Cart logo on the left */}
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-isvkp&psig=AOvVaw2h8eLi7aFSE0j5ERVQV95h&ust=1701005671224000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMC3goqi34IDFQAAAAAdAAAAABAE"
            
            className="cart-icon"
          />
          {/* Your Cart title */}
          <div className="cart-title ml-2 text-white">Your Cart</div>          

          {/* Red rectangle with the number of items on the right */}
          <div className="cart-items-container">
            <div className="cart-items bg-danger text-light">0</div>
          </div>

        </div>
      </div>
    </nav>
 
  );
};


export default Navbar;
