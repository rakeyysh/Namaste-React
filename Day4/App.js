import React from "react";
import ReactDOM from "react-dom/client"

/**  Planning:
 * 
 *  Header
 *    - Logo
 *    - Nav items
 * 
 *  Body
 *   - Search
 *    - RestaurantContainer
 *      - RestaurantCard
 *       - Img
 *        - Name of Res, Star Rating,cuisine,delivery-time.
 * 
 *  Footer
 *    - Copyright
 *     - Links
 *      - Address
 *      - Contact
 * 
 * 
 */




 const Header = () =>{
  return (

    <div className="header">
      <div className="logo-container">
      <img 
      className="logo"
      src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="/>
      </div>

    <div className="nav-items">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
       </ul>
    </div>
  </div>
  )
 }

 

 const RestaurantCard = (props) =>{
  console.log(props);
  // Destructuring (JS concepts)
   const { resName, cuisine } = props;

  return (
    <div className="restaurant-card">
      <img 
      className="restaurant-logo"
      alt="restaurant-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.6 star</h4>
      <h4>31 minutes</h4>

    </div>
  )
 }


 const Body = () =>{
   return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resName="Hotel Gurukripa" cuisine="Biryani,North Indian"/>
        <RestaurantCard resName="KFC" cuisine="Burgers,Chickens,Fast-Food"/>
        <RestaurantCard resName="KFC" cuisine="Burgers,Chickens,Fast-Food"/>
        <RestaurantCard resName="KFC" cuisine="Burgers,Chickens,Fast-Food"/>
        <RestaurantCard resName="KFC" cuisine="Burgers,Chickens,Fast-Food"/>
        <RestaurantCard resName="KFC" cuisine="Burgers,Chickens,Fast-Food"/>
        
        
        
        
      </div>
    </div>
   )
 }
 
  const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Body/>
        
        </div>
        
    )
  }
  


















const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we render React Functional components.
root.render(<AppLayout/>);











