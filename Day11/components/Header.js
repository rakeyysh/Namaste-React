
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{

  
  const [btnName,setbtnName] = useState("Logout");
 
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // console.log("Header Render");

  // if no dependency array ==> useEffect is called on every render
  // if dependency arry is empty = [] => useEffect is called on intial render(just once)
  // if dependency array is [btnName] =>called everytime btnName is updated.

  useEffect(() =>{
    console.log("useEffect called");
  },[])
  

    return (
      <div className="flex justify-between  shadow-lg mb bg-amber-100">
        <div className="logo-container">
        <img 
        className="w-52"
        src={LOGO_URL}/>
        </div>
  
      <div className="flex items-center">
         <ul className="flex p-4 m-4">

          <li className="px-4">
            Online Status: {onlineStatus ? "✅" :"🔴"}
          </li>

          <li className="px-4" >
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">
            <Link to="/">Home</Link>
            </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
            </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link> 
            </li>

          <li className="px-4">Cart</li>
          <li className="px-4">{loggedInUser}</li>

          <button className="login" onClick={()=>{
          
           btnName == "Logout" ? setbtnName("Login") :setbtnName("Logout");
       
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
