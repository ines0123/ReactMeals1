import { createContext, useState} from "react";

export const FoodContext = createContext();

export const FoodContextProvider = ({children}) => {
    const [foodItems, setFoodItems] = useState( [
            {
                name : "Sushi",
                price : "22.99",
                amount : 0,
                description : "Finest fish and veggies",
            },
            {
                name : "Schnitzel",
                price : "16.50",
                amount : 0,
                description : "A german specialty! ",
            },
            {
                name : "Barbecue Burger",
                price : "12.99",
                amount : 0,
                description : "American, raw, meaty",
            },
            {
                name : "Green Bowl",
                price : "18.99",
                amount :0,
                description : "Health and green",
            }
        ]
    )
    return(
        <FoodContext.Provider
            value={{
                foodItems,
                setFoodItems,
            }}
        >
            {children}
        </FoodContext.Provider>
    )

}