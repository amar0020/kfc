import { MyLink, RsMenuBtn, RsMenucard } from "./MenuStyledComponents"
import "./menu.css"

import { Cartcontext } from "../../cartcontext/Cartcontex"

import { useContext } from "react"
import { Link } from "react-router-dom"


export const ProductCard = ({prod,cat}) => {

    const nameSt=localStorage.getItem("login")?.split(",")||"";
    const {onAdd}=useContext(Cartcontext);
    // console.log(onAdd,status)
const handleAdd=()=>{
     console.log("cart");
     if(nameSt){
        onAdd(prod);
     }
     else{
        alert("Please login, before continuing");
        window.location.href="/login";
     }
}
    return (
        <RsMenucard className="Rs-menuCard" key={prod._id}>
            <Link to ={`/product/${prod.id}`} style={{textDecoration:"none",color:"black"}}>
        <div>
            <img src={prod.image_link} alt="kfc-menu" style={{ width: '10 %' }} />
        </div>
        <h2>{prod.name}
        </h2>
        <p>{cat}</p>
        <h4><span>Rs. </span>{prod.price}<span>.00</span></h4>
        <p>{prod.bonus}</p>

        </Link>
        <RsMenuBtn onClick={handleAdd}>Add to cart
                    <img id="cart-img" src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></RsMenuBtn>
                    
        </RsMenucard>

        
       

    )
}