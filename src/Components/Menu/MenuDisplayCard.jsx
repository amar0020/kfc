
import {GridCol3 } from "./MenuStyledComponents"
import { useEffect } from "react"
import { useState } from "react"
import { ProductCard } from "./ProductCard"

export const MenuDisplayCard = ({category,grid}) => {
    const [data, setData] = useState([]);
console.log(category,"menuCategory")
    useEffect(() => {
        getData();
    }, [])
    
    const getData = () => {
        
        fetch(`https://gentle-escarpment-82476.herokuapp.com/product`).
            then(response => {
                // if(response.ok){
                   return response.json()
                // }
            }).then(data1 => {
                console.log(data1,"data1")
                setData(data1)
            })
    //     axios.get(`https://gentle-escarpment-82476.herokuapp.com/product`).then(({data}) => {
    //         console.log(data);
    //         // if (data.name === category) {
    //             setData(data);
    //         // }
    //    }) 
    }

    

    
    return (
        <GridCol3>
            {data.
                filter((e) =>e.category==category).
                map((e) => {
                    return (
                        <div key={e._id}>
                            <ProductCard prod={e} />
                        </div>
               
                )
            })}
        </GridCol3>
    )
}