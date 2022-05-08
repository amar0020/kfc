import { RsMenuBtn, RsMenucard } from "./MenuStyledComponents"
import "./menu.css"
import { cartContext } from "../../cartcontext/Cartcontex"

export const ProductCard = ({prod,cat}) => {
    
    var array = [];
    
    const handleCart = (prod) => {
        array.push(prod);
        console.log(array, "cartArray");
     }
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
        
        <RsMenuBtn onClick={()=>handleCart(prod)}>Add to cart
            <img id="cart-img" src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" /></RsMenuBtn>
    </RsMenucard>

    )
}