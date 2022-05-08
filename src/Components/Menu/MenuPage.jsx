import { RsMenuDispBar } from "./MenuStyledComponents"
import "./menu.css"
import { Search } from "./Search"
import { MenuDisplayCard } from "./MenuDisplayCard"

import {SideNavbar} from "./SideNavbar"
import { MatchDaySpecial } from "./MatchDaySpecial"
// import { SearchDetailCard } from "./SearchDetails"

export const MenuPage = () => {
    
    return (
        <div>

            <RsMenuDispBar className="Rs-Menu-display">
                
        <SideNavbar/>

                {/* display div--right side */}
                <div className="Rs-Menu-GridBar" >

                    {/* search bar */}
                    <div className="Rs-search">
                        <Search/>
                        {/* <MenuSearch type="search" placeholder="Search" onChange={handleSearch}/> */}
                    </div>

                    
                    {/* display grid */}
                    {/* // border: "1px solid gray", */}
                    <div style={{
                        border: "1px solid lightgray",
                        backgroundColor:"#f1eeee",
                        width: "100%",
                        padding: "2%"
                    }}>

                            <h2>MATCH DAY SPECIAL</h2>
                            <MatchDaySpecial />
                        {/* <MenuDisplayCard category={"match day special"} /> */}
                        
                        <h2 style={{marginTop:"20px"}}>CHICKEN BUCKETS</h2>
                        <MenuDisplayCard category={"Biryani Buckets"} />

                        <h2 style={{marginTop:"140px"}}>BOX MEALS</h2>
                        <MenuDisplayCard category={"Burgers"} />
                        
                        <h2 style={{ marginTop: "80px" }}>BIRYANI BUCKETS</h2>
                        <MenuDisplayCard category={"Biryani Buckets"} />

                        <h2 style={{marginTop:"130px"}}>BURGERS</h2>
                        <MenuDisplayCard category={"Burgers"} />
                        
                        <h2 style={{marginTop:"80px"}}>STAY HOME SPECIALS</h2>
                        <MenuDisplayCard category={"match day special"} />
                        
                        <h2 style={{marginTop:"50px"}}>SNACKS</h2>
                        <MenuDisplayCard category={"Biryani Buckets"} />
                        
                        <h2 style={{marginTop:"130px"}}>BEVERAGES</h2>
                        <MenuDisplayCard category={"Burgers"} />

                    </div>
                    
                </div>
                
            </RsMenuDispBar>
        </div>
    )
}