import React, { lazy, Suspense, useEffect,useState,useContext } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { lazy } from "react";




import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";



 

 

const Grocery = lazy(()=> import("./components/Grocery"));
 
  const AppLayout = () => {

   const [userName,setUserName] = useState();


   //authentication
   useEffect(()=>{
   // Make  an API call and send username and password
    const data = {
      name : "Rakesh Mishra",
    }
       setUserName(data.name);
   },
   [])

  

    // console.log(<Body/>);
    return (
      // Default User
       <UserContext.Provider  value = {{loggedInUser : userName}} >
        {/* Rakesh Mishra */}
        <div className="app">
          <UserContext.Provider value = {{loggedInUser : "Elon Musk"}}>

          {/* Elon Musk */}
         <Header/>
         </UserContext.Provider>
         <Outlet/> 
        </div>
         </UserContext.Provider>
        
    )
  }
  

const appRouter = createBrowserRouter([
  {
    path:  "/",
    element: <AppLayout/>,
    children: [

      {
        path : "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>

      },

      {
        path : "/",
        element: <Body/>

      },
      {
        path: "/about",
        element: <About/>
       
    },
    {
      path: "/contact",
      element : <Contact/>
    },
    {
      //This means :resId is dynamic id
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
                       
    }
    ],
    errorElement: <Error/>
   
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we render React Functional components.
root.render(<RouterProvider router={appRouter}/>);











