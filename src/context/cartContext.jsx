import { createContext,useState } from "react";

//create context 

export const CartContext=createContext();

//create provider


export const CartProvider=({children})=>{
    const [cartItems,setCartitems]=useState([]);


    //add to cart 

    const addTocart=(product)=>{
        setCartitems((prevCart)=>{
            //check if item is already there in cart
            const existingItem=prevCart.find((item)=>item.id===product.id);

            if(existingItem){
                return prevCart.map((item)=>{
                    item.id===product.id?{...item,quantity:item.quantity+1}: item
                })
            }

            //if it is not there already

            else{
                return [...prevCart,{...product,quantity:1}]
            }
        })
    }

    //for removing specific item
    const removeCart=(id)=>{

        setCartitems((prevCart)=>prevCart.filter((item)=>item.id!==id));

    }


    //clear complete cart 

    const clearCart=()=>{
        setCartitems([])
    }


    return (
        <CartContext.Provider value={{cartItems,addTocart,removeCart,clearCart}}>
            
            {children}

        </CartContext.Provider>
    )
}