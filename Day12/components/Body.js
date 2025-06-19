import RestaurantCard, { WithDiscounts } from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
  
 // Local State Variable  - Super powerful variable
 const [listOfRestaurants,setListOfRestaurants] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);


 const [searchText,setSearchText] = useState("");

//  console.log(listOfRestaurants);


 // Whenever state variable update, react triggers a reconcilation cycle(re-render the component)
//  console.log("Body Rendered");


  useEffect(()=>{
     fetchData();
  },[])


 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.794574&lng=75.8493056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   setListOfRestaurants(json?.data.cards[4]?.card?.card?.gridElements.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data.cards[4]?.card?.card?.gridElements.infoWithStyle?.restaurants);

   
  

  
 };



   const online = useOnlineStatus();

   if(online == false){
     return(
      <h1> Looks Like You are Out of Internet !!!</h1>
     )
   }

 // Conditional Rendering
 if(listOfRestaurants.length == 0){
  return <Shimmer/>
 }

// Normal JS variable


const RestaurantCardWithDiscounts = WithDiscounts(RestaurantCard);

  


    return (
     <div className="body">
       <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />

          
          <button className="px-4 py-1 bg-red-400 m-4 rounded-lg hover:bg-red-500" onClick={() =>{
             // Filter the restaurant cards and update the UI
             // searchText
             
            const filteredRestaurant =listOfRestaurants.filter(
              (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
             setFilteredRestaurant(filteredRestaurant);
          }
          }>search</button>
          
          
        </div>


        <div className="search m-4 p-4 flex items-center">

        <button className="px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={() => {
          // Filter - logic here
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
          console.log(filteredList);
           setFilteredRestaurant(filteredList);
          // console.log(listOfRestaurants);
        }}
        >
          Top Rated Restaurant</button>
          </div>

       </div>
       <div className="restaurant-container flex flex-wrap">
        {
        filteredRestaurant.map((restaurant) =>(
        

          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.aggregatedDiscountInfoV3 ? (<RestaurantCardWithDiscounts resData={restaurant}/>)
            :(
            <RestaurantCard resData={restaurant}/>)}</Link>
          
        ))}


        
       </div>
     </div>
    )
  }
 
  
  export default Body;


  // Swiggy Latest Api
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.794574&lng=75.8493056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING



  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING