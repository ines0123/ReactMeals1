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
