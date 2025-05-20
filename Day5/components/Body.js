import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () =>{
  
 // Local State Variable  - Super powerful variable
 const [listOfRestaurants,setListOfRestaurants] = useState([
  {
  data:{
    id:"334475",
    name:"KFC",
    cuisines:["Burgers","Biryani","American","Snacks","Fast-Food"],
    costForTwo: 40000,
    deliveryTime: 36,
    Rating: "3.8",

  }},
  {
  data:{
    id:"334476",
    name:"Dominos",
    cuisines:["Pizzas",,"American","Snacks","Fast-Food"],
    costForTwo: 40000,
    deliveryTime: 36,
    Rating: "4.3",

  }},
  {
    data:{
      id:"334477",
      name:"McDonalds",
      cuisines:["Burgers","American","Meal","Fast-Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      Rating: "4.5",

    }
  }]);

// Normal JS variable


  


    return (
     <div className="body">
       <div className="filter">
        <button className="filter-btn" onClick={() => {
          // Filter - logic here
          const filteredList = listOfRestaurants.filter((res) => res.data.Rating > 4);
          setListOfRestaurants(filteredList);
          console.log(listOfRestaurants);
        }}
        >
          Top Rated Restaurant</button>
       </div>
       <div className="restaurant-container">
        {
        listOfRestaurants.map((restaurant) =>(
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))}


        
       </div>
     </div>
    )
  }
 
  
  export default Body;
