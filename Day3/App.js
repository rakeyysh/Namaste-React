





import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"},
       React.createElement("h1",{},"I am inside h1 Namste Rakesh Javascript")));
    
       


        //JSX
     

// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React! ");  // Object --React Element


    
//console.log(parent);     //Object
 const root = ReactDOM.createRoot(document.getElementById("root"));


 // The render method  is converting the Object (React Element) to an HTML Element and putting inside root.
root.render(parent);  



// React can work independtly small portion of an app like for specifc element . it is not a full -fledged framework, It's a Library.