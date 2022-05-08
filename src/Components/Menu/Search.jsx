
import { useState } from "react"
import {MenuSearch, StyledLink } from "./MenuStyledComponents"
import "./search.css"

export const Search = () => {
    const [data, setData] = useState([]);
    const [text,setText] = useState("")


    const handleSearch = (e) => {
        setText(e.target.value);
        console.log(text)
        e.preventDefault();

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
        //     // console.log(data,"serach");
        //     setData(data);
        // })
    }

    const filteredData = data.filter((e) => {
        if (text === "") {
            return ""
        } else {
            return e.name.toLocaleLowerCase().includes(text)
        }
    })
    console.log(filteredData,"fd")
  
    

    return (
        <div>

            {/* search div */}
            <div>
                <MenuSearch type="search" placeholder="Search" onChange={
                    handleSearch
                } />
            <span><img src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg" onClick={handleSearch}/></span>
            </div>

            <div style={{ border: "1px solid black", margin: "2% 0%"}}></div>
            

            {/* search data names display */}

            <div style={{ backgroundColor: "black" }} >
                {filteredData
                    .map((e) => {
                        return (
                            <p style={{ color: "gray" }} key={e._id}>
                                <StyledLink to={`/product/${e.id}`}>
                                    <img src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg" />
                                    <span> </span>
                                    <span> </span>
                                    {e.name}
                                </StyledLink>
                            </p>
                
                        )
            })}
            </div>

        </div>
    )
}