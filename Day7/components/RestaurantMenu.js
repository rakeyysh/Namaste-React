import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () =>{

    const[resInfo,setResInfo] = useState(null);

    const params = useParams();
    console.log(params);
    const {resId} = params;
     
    useEffect(()=>{
      fetchMenu();
    },[]);

    const fetchMenu = async () =>{
     const data = await fetch(MENU_API+resId);
     console.log(resId);
     const json = await data.json();
     console.log(json);
     setResInfo(json.data);
    };

   

       const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};
        const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || {};
        console.log(itemCards);

// To refelect every changes on ui using state variable
    return resInfo == null ? <Shimmer/> :
     (
        <div className="menu">
            { <h1>{name}</h1> }
            <p>{cuisines.join(",")} -  {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
               {itemCards.map((item)=> <li key={item.card.info.id}> 
                {item.card.info.name} -  {"Rs"} {item.card.info.price/100}
                
                </li>
            )}
            </ul> 
        </div>

    )
};

export default RestaurantMenu;