import { useEffect, useState } from "react";

const User = (props) =>{

    const[count] = useState(0);
    const [count2] = useState(1);
    //console.log(props);
    const {name} = props;

    useEffect(()=>{

        // Api-calls

        console.log("good");
       return () =>  {
        console.log("unmount when we go on other page");

       };
    },[])


    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location : Indore</h3>
            <h4>Contact: rakeyysh@20</h4>
            <h4>Count: {count}</h4>
        </div>
    )
};

 export default User;