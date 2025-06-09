
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Contact = ()=>{

     const { loggedInUser } = useContext(UserContext);
     return (
          <div>
            <h1>Contact Us Page</h1>
            <h2 className="font-bold">{loggedInUser}</h2>
          </div>
     )
};





export default Contact;