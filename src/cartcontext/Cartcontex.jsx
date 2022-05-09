import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Cartcontextprovider = ({children})=>{

    const [uid,setUid]=useState("");
    const [status,setStatus] = useState("")

    const handlecartchange=((id1,status1)=>{
        setUid(id1);
        setStatus(status1)
    })

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    }
    return <Cartcontext.Provider value={{status,uid,handlecartchange,cartItems,setCartItems,onRemove,onAdd}}>{children}</Cartcontext.Provider>
}

