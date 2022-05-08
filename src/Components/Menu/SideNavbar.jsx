import { RsSideKfcLogo, StyledLink} from "./MenuStyledComponents"
import "./menu.css"

export const SideNavbar = () => {

    const categories = [
        "Match Day Special",
        "Chicken Buckets",
        "Box Meals",
        "Biryani Buckets",
        "Burgers",
        "Stay Home Specials",
        "Snacks",
        "Beverages"
    ];
   
    return (
        <div className="Rs-Menu-sideBar">

            {/* three lines */}
            <div className="Rs-Menu-Logo">
                        <RsSideKfcLogo ></RsSideKfcLogo>
                        <RsSideKfcLogo></RsSideKfcLogo>
                        <RsSideKfcLogo ></RsSideKfcLogo>
            </div>
            
            {/* data --side kfc heading */}
            <div className="Rs-SideData-Div">
                <StyledLink to="/product">
                    <h1 style={{ color: "black" }}>
                        KFC MENU
                    </h1>
                </StyledLink>

            {/* data --side navbar categories */}
            {categories.map((e) => {
                return (
                    <div key={e}>
                     <StyledLink to={`/product/category/${e}`}>
                        <p  style={{ color: "black" }}>{e}</p>
                        </StyledLink>
                    </div>
                )
            })}
        
            </div>

        </div>
    )
}