import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cartcontext } from "../cartcontext/Cartcontex";
import { MyLink} from "./Menu/MenuStyledComponents";

const Navbar = () => {

  const {id,cartItems}=useContext(Cartcontext);
  console.log(cartItems);

  const navigate=useNavigate();
const nameSt=localStorage.getItem("login")?.split(",")||"";
const email=nameSt[0]?.split(":")[1]?.split("@")[0]||"";
const [price,setPrice]=useState(0);

useEffect(()=>{
  let prices=0;
  cartItems.map((e)=>{console.log(e.price);
   prices+=Number(e.qty)*Number(e.price)});
   setPrice(prices);
},[cartItems])

  function setcart(){
    if(email) return navigate("/cart");
    else return navigate("/login")
  }

  const handleSign=()=>{
     if(email){
        localStorage.clear("login");
        setPrice(0);
        navigate("/")
     }else{
      navigate("/login")
     }
  }

  return (
    <>
      <div className="rb-header" 
      style={{position:"sticky",top:"0",zIndex:"1",backgroundColor:"white"}}>
        <ul>
          <div className="rb-logo-part">
            <li>
              <Link to={`/`}>
                <img
                  src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                  alt=""
                  srcset=""
                />
              </Link>
            </li>
            <MyLink href="/product">
                <li>Menu</li>
            </MyLink>
            <li>
              <Link to={`/deals`}>
                <button className="deal-btn">Deal</button>
              </Link>
            </li>
          </div>
        </ul>
        <ul>
          <div className="rb-left-head">
            <li>
              <a href="#">
             

               <img
                  src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                  alt=""
                  srcset=""
                />
                 {!email?"":email}
              </a>
              
            </li>
           <div onClick={handleSign}> <li>{!email?"Sign In":"Sign Out"}</li></div>
          </div>
          <div className="rb-right-head">
            <li>₹ {price}</li>
            <Link to={"/cart"}><li onClick={()=>{
                  setcart()
            }}>
                <img
                  className="rb-combo-logo"
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  alt=""
                  srcset=""
                />
            </li>
            </Link> 
          </div>
        </ul>
      </div>


      <div className="headerBottom">
                <div className="headBottomParent">
                    <div className="headBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
                    <a href='#'> <button className="redbtn">Start Order</button></a>



                    
                        {/* <button className="redbtn">
                            Start Order
                        </button> */}
                    
                </div>
            </div>
    </>
  );
};

export default Navbar;
