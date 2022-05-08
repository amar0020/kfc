import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const Cartcontextprovider = ({children})=>{

    const [uid,setUid]=useState("");
    const [status,setStatus] = useState("")

    const handlecartchange=((id1,status1)=>{
        setUid(id1);
        setStatus(status1)
    })
    return <Cartcontext.Provider value={{status,uid,handlecartchange}}>{children}</Cartcontext.Provider>
}
