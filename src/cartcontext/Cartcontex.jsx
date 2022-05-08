import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Cartcontextprovider = ({children})=>{

    const [uid,setUid]=useState("");
    const [status,setStatus] = useState("")

    const handlecartchange=((id1,status1)=>{
        setUid(id1);
        setStatus(status1)
    })

    const [cartArr, setCartArr] = useState([]);
    const handleCart = (prod) => {
        setCartArr(prod);
        console.log(cartArr, "cartArray");
     }
    return <Cartcontext.Provider value={{status,uid,handlecartchange,cartArr,setCartArr,handleCart}}>{children}</Cartcontext.Provider>
}

