import React from "react";
import { useContext } from "react";
import { Cartcontext } from "../cartcontext/Cartcontex";
import "./Cart.css"
import { Link } from "react-router-dom";
import { RsMenuBtn } from "./Menu/MenuStyledComponents";
export default function Basket(props) {
    const { cartItems, onAdd, onRemove} = useContext(Cartcontext);
    console.log(cartItems)
    //   const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
              {cartItems.length === 0 && <div>Cart is empty</div>}
              <div>
        {cartItems.map((item) => (
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "5%",
                // border: "1px solid yellow",
                paddingTop:"1%"
            }} key={item.id} className="row">
                <div style={{
                    height: "10%",
                    width:"10%",
                    // border:"1px solid red"
                }}>
              {/* {" "} */}
              <img style={{width:"100%",height:"100%"}} className="small" src={item.image_link} alt={item.name} />
                </div>
                    <h3 className="col-2">{item.name}</h3>
            <p className="col-2">
                    <button style={{width:"20px",backgroundColor:"gray",border:"none"}}onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button style={{width:"20px",backgroundColor:"gray",border:"none"}} onClick={() => onAdd(item)} className="add">
                +
              </button>
            </p>

            <p className="col-2 text-right">
                    {item.qty} x Rs {item.price
                        // .toFixed(2)
                    }
            </p>
          </div>
        ))}
        </div>

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Delivery Charges</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Link to="/checkout"><RsMenuBtn>
                Checkout
                          </RsMenuBtn>
                          </Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}