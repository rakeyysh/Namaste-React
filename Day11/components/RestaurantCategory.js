import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{
     
    const {title,itemCards} = props?.data;
    const {dummy} = props;
    
  
    const handleClick = ()=>{
        
        props.setShowIndex();
       


    }

   


    return(
     <div>
        {/* Accordion Header */}
        <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
             
             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">
                {title} 
                ({itemCards.length})
                </span>
              
            <span>⌄</span>
            </div>
            
            {props.showItems && <ItemList items= {itemCards} dummy = {dummy}/>}
            
        </div>
          
       
        {/* Accordion Body */}
       
       
    </div>
    )
}

export default RestaurantCategory;