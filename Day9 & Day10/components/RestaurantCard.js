
import { LOGO_URL } from "../utils/constants"
const RestaurantCard = (props) =>{
     console.log(props);
   
    const {resData} = props;
    // Destructuring in JS

    const{
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      sla,
      avgRating,
    } = resData?.info;

   


     
  
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-50 break-words rounded-lg hover:bg-gray-200">
        <img 
        className="rounded-lg"
        alt="restaurant-logo"
         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{avgRating}</h4>
        
  
      </div>
    )
   }
   export default RestaurantCard;