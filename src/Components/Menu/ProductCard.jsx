import { RsMenuBtn, RsMenucard } from "./MenuStyledComponents"
import "./menu.css"
 
import { useContext } from "react"
import { Cartcontext } from "../../cartcontext/Cartcontex"

export const ProductCard = ({prod,cat}) => {
    
     const {onAdd}=useContext(Cartcontext)
    return (
        <RsMenucard className="Rs-menuCard" key={prod._id}>
        <div>
            <img src={prod.image_link} alt="kfc-menu" style={{ width: '10 %' }} />
        </div>
        <h2>{prod.name}
        </h2>
        <p>{cat}</p>
        <h4><span>Rs. </span>{prod.price}<span>.00</span></h4>
        <p>{prod.bonus}</p>
        
        <RsMenuBtn onClick={()=>onAdd(prod)}>Add to cart
            <img id="cart-img" src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></RsMenuBtn>
    </RsMenucard>

    )
}