
- # Conditional Rendering
- rendering on the basis of conditions is known as Conditional Rendering. 


- # 💡 Example to Illustrate
- // These are your states


/*** code
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [top, setTop] = useState([]); // Just for filtering

// JSX (UI rendering)
return (
  <div className="restaurant-container">
    {
      filteredRestaurant.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))
    }
  </div>
);
***/



- # ✅ Bottom Line
🟩 Only the state used inside JSX affects what's rendered.
🟥 Updating other state variables won’t affect the UI unless they’re involved in rendering. 
