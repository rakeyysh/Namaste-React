import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement ==> JS Object ==> HTML Element(render)


// This is how you create React element using React(core React).
const heading = React.createElement('h1',{id:"heading"},"Namaste React!");

console.log(heading);  // Object


//JSX

// This is how you create React element using JSX.
//  JSX (transpiled before it reaches the JS) - by Parcel - Babel.






// JSX ==> Babel transpiles it to -- React.createElement => ReactElement => JS Object => HTML Element(render) 

const elem = <span>This is React-element</span>

// React Element

 const jsxHeading =  (
    
    <h1 className="head" tabIndex="5">
  
      {/* To put any React-element inside React-element */}
      
      {elem}
      Namaste React using JSX
    </h1>
   )

 //console.log(jsxHeading);  // Object

//  jsxHeading is a react Element , jsx is just a way/syntax to write this


// React Component
// Class Based Component - OLD
// Functional Component  - NEW


// React Functional Components


const Title = () => (
    <h1 className="head" tabIndex="5">Namaste React using JSX
    </h1>
   );
  

// const HeadingComponent1 = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>;
// };


// HeadingComponent1 is same as HeadingComponent2

const data = 1000;

// Component Composition.
const HeadingComponent2 = () => (
<div id="container">


    {/* To put any JS code inside JSX */}
    {jsxHeading}
     <h2>{100 + 200}</h2>
     <h2>{console.log("Hii")}</h2>


    {/* to render Title component inside HeadingComponent2 */}
    {/* <Title>  </Title>  and <Title/>  are same things to render */}
    {/* ultimately component is a js function which is js code that's why {Title()} */}
    
    {Title()}  
    <Title></Title>
    <Title/>    

<h1 className="heading">Namaste React Functional Component</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


  


// This is how we render React Functional components.
root.render(<HeadingComponent2/>);


// root.render(heading);
// root.render(jsxHeading);








