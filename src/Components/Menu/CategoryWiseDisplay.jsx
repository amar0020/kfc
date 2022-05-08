
import { useEffect } from "react";
import { useState } from "react";
import {useParams } from "react-router";
import {  GridCol3, RsMenuDispBar } from "./MenuStyledComponents";
import "./menu.css"
import { SideNavbar } from "./SideNavbar";
import { ProductCard } from "./ProductCard";

export const CategoryDisplay= () => {
    const [data, setData] = useState([]);
    var { category } = useParams();
    const checkCat = category;

    if (category == "Match Day Special" || category == "Stay Home Specials") {
        category = "match day special"
    }

    if (category == "Chicken Buckets" || category=="Snacks") {
        category = "Biryani Buckets"
    }
    
    if (category == "Box Meals" || category =="Beverages") {
        category="Burgers"
    }

    useEffect(() => {
        
        fetch(`https://gentle-escarpment-82476.herokuapp.com/product`).
        then(response => {
            // if(response.ok){
               return response.json()
            // }
        }).then(data1 => {
            console.log(data1,"data1")
            setData(data1)
        })
        // axios.get(`https://gentle-escarpment-82476.herokuapp.com/product`).then(({ data }) => {
        //     setData(data);
        //     console.log(data, "search")

        // })
    }, []);
    
    
   

    return (
        <RsMenuDispBar className="Rs-Menu-display">
            <SideNavbar />
            <div style={{backgroundColor:"#f1eeee",paddingBottom:"120px"}}>
            <h1>{checkCat}</h1>
            <GridCol3>
                {data.filter((e) => e.category == category).map((e) => {
            
            return (
                <ProductCard prod={e} category={checkCat}/>
         
          )
        })}
                </GridCol3>
        </div>

        </RsMenuDispBar>
    )
}