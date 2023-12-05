import Description from "../Description/Description";
import "./MainPage.css";
import Navbar from "../Navbar/Navbar";
import FoodList from "../FoodList/FoodList";

export default function MainPage() {
    return (
        <div>
        <Navbar />
        <div className="main-page-background">
            <div className="description-container">
                <Description />
            </div>
            <div className="food-list-container">
                <FoodList />
            </div>
        </div>
        </div>
    );
}
