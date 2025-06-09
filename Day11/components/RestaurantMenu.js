import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () =>{

    const[showIndex,setShowIndex] = useState(0);

    const params = useParams();
    const {resId} = params;

    const dummy = "Dummy Data";


    //  Custom Hook
    const resInfo = useRestaurantMenu(resId);
     

       const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};
        const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || {};
        console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards .filter((c) => c?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
       


         

// To refelect every changes on ui using state variable
    return resInfo == null ? <Shimmer/> :
     (
        <div className="text-center">
            { <h1 className="font-bold my-4 text-2xl">{name}</h1> }
            <p className="font-bold text-lg">{cuisines.join(",")} -  {costForTwoMessage}</p>
            

            {/* categories accordions */}
            {categories.map((category,index)=> (
             
            <RestaurantCategory key = {category?.card?.card?.title} data = {category.card.card} 
            showItems = {index == showIndex ? true:false}
            setShowIndex = {()=> setShowIndex(index)}
            dummy = {dummy}
            />
            ))}
        
            
        </div>

    )
};

export default RestaurantMenu;