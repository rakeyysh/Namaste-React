const RestaurantCard = (props) =>{
    console.log(props);
   
    const {resData} = props;
    // Destructuring in JS

    const{
      name,
      cuisines,
      costForTwo,
      deliveryTime,
      Rating
    } = resData?.data;


     
  
    return (
      <div className="restaurant-card">
        <img 
        className="restaurant-logo"
        alt="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq"/>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{Rating}</h4>
        
  
      </div>
    )
   }
   export default RestaurantCard;