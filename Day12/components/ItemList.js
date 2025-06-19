import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items,dummy})=>{
    // console.log(props);
    // const{items} = props;
    // const {dummy} = props;

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        // Dispatch an action
        dispatch(addItem(item));
    }
    
     
    return (
    <div>
        
          {items.map((item) => (
             
            <div  key = {item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">

                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>- ₹{item.card.info.defaultPrice?(item.card.info.defaultPrice /100) :(item.card.info.price /100)}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
            </div>

          <div className="w-3/12 p-2 ">
          <div className="absolute">
          <button className="bg-white shadow-lg p-2 mx-6 my-20 rounded-lg w-28 text-green-800 font-bold"
           onClick={(() => handleAddItem(item))}
           >
            ADD
            </button>
          </div>
          <img src={CDN_URL + item.card.info.imageId}/>
         
          </div>
          </div>
         
          ))}
        
    </div>
        );
    }


export default ItemList;