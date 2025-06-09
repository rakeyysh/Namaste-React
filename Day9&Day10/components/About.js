import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);

        console.log(" Parent Constructor");
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }

    render(){
        console.log("Parent Render");

    return (
        <div>
         <h1>About</h1>
         <h2>This is Namaste React Web Series</h2>
         {/* <User  name = {"Rakesh Mishra"}/> */}
         <UserClass name = {"Rakesh"} Location = {"Jaipur"}/>
         <User/>
         
        </div>

 );
    }
};


/**
 *  - Parent Constructor
 *  - Parent Render
 *   
 *    - First Constructor
 *    - First Render
 * 
 *  
 *     - Second Constructor
 *      - Second Render
 * 
 *     < DOM UPDATED - IN SINGLE BATCH >
 *        - First componentDidMount();
 *        - Second componentDidMount();
 * 
 * 
 *  - Parent componentDidMount();
 *  
 */

// const About = () =>{

   

//     return (
//            <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User  name = {"Rakesh Mishra"}/> */}
//             <UserClass Location = {"Jaipur"} name = {"Raju"}/>
//            </div>


//     );
// };

export default About;