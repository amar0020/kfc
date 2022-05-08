
import { useEffect } from "react";
import { useState } from "react";
import {  useNavigate, useParams } from "react-router";
import { GridCol3,RsMenuBtn,RsMenuDispBar, RsSideKfcLogo, StyledLink } from "./MenuStyledComponents";
import "./menu.css"
import { ProductCard } from "./ProductCard";

export const SearchDataDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const redirect = useNavigate();

    useEffect(() => {

        fetch(`https://gentle-escarpment-82476.herokuapp.com/product`).
        then(response => {
             return response.json()
        }).then(data1 => {
            console.log(data1,"data1")
            setData(data1)
        })

    //    axios.get(`https://gentle-escarpment-82476.herokuapp.com/product?id=${id}`).then(({data}) => {
    //        setData(data);
    //        console.log(data,"search") 

    //    })
    }, [])
    
    const handleClear = () => {
       redirect(`/product`)
    }

    return (
        <RsMenuDispBar className="Rs-Menu-display">
               <div className="Rs-Menu-sideBar">
            <div className="Rs-Menu-Logo">
                        <RsSideKfcLogo ></RsSideKfcLogo>
                        <RsSideKfcLogo></RsSideKfcLogo>
                        <RsSideKfcLogo ></RsSideKfcLogo>
                </div>
        <div className="Rs-SideData-Div">
             <StyledLink to="/product">
                    <h1 style={{ color: "black" }}>
                        KFC MENU
                    </h1>
                </StyledLink>
                    <h1>1 Result</h1>
                    {/* <MyLink to="/menu"> */}
                        <RsMenuBtn style={{ marginLeft: "0%" }} onClick={handleClear}>clear search</RsMenuBtn>
                    {/* </MyLink> */}
            </div>
            </div>
        {data.filter((e)=>e.id==id).map((e)=>{
            return (
                <GridCol3 key={e._id}>
                    <ProductCard prod={e}/>
                </GridCol3>
          )
        })}
        </RsMenuDispBar>
    )
}