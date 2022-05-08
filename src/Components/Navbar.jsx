import { Link } from "react-router-dom";
import { MyLink} from "./Menu/MenuStyledComponents";

const Navbar = () => {
  return (
    <>
      <div className="rb-header">
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
              </a>
            </li>
           <MyLink to={`/login`}> <li>Sign In</li></MyLink>
          </div>
          <div className="rb-right-head">
            <li>₹ 0</li>
            <li>
              <a href="#">
                <img
                  className="rb-combo-logo"
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
          </div>
        </ul>
      </div>


      <div className="headerBottom">
                <div className="headBottomParent">
                    <div className="headBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
                    <a href='/menu/beverages'> <button className="redbtn">Start Order</button></a>



                    
                        {/* <button className="redbtn">
                            Start Order
                        </button> */}
                    
                </div>
            </div>
    </>
  );
};

export default Navbar;
