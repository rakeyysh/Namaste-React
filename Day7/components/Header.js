
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{

  
  const [btnName,setbtnName] = useState("Logout");
  console.log("Header Render");

  // if no dependency array ==> useEffect is called on every render
  // if dependency arry is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [btnName] =>called everytime btnName is updated.

  useEffect(() =>{
    console.log("useEffect called");
  },[])
  

    return (
      <div className="header">
        <div className="logo-container">
        <img 
        className="logo"
        src={LOGO_URL}/>
        </div>
  
      <div className="nav-items">
         <ul>
          <li>
            <Link to="/">Home</Link>
            </li>

          <li>
            <Link to="/about">About Us</Link>
            </li>

          <li>
            <Link to="/contact">Contact Us</Link>
            
            </li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
          
           btnName == "Logout" ? setbtnName("Login") :setbtnName("Logout");
          console.log(btnName);
          }}
          >
          {btnName}
          </button>
         </ul>
      </div>
    </div>
    );
   };

   export default Header;
