import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{

    const cartItems = useSelector((store) =>store.cart.items);
     const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
     console.log("cartItems" + cartItems);

    return (
        <div className="text-center m-4 p-4">
            
            <h1 className="text-2xl font-bold">CartPage</h1>
            <div className="w-6/12 m-auto">
            <button className="text-white rounded-lg bg-black p-2 m-2 "
             onClick={handleClearCart}
            >
            Clear Cart
            </button>
            {cartItems.length == 0 && <h1>Your cart is empty 🫡</h1>}
            <ItemList  items ={cartItems}/>
            </div>

            </div>
    )

}

export default Cart;