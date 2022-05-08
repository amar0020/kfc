import { GridCol2} from "./MenuStyledComponents"
import { useEffect } from "react"
import { useState } from "react"
import { ProductCard } from "./ProductCard"

export const MatchDaySpecial = ({category,grid}) => {
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
        <GridCol2>
            {data.
                filter((e) =>e.category=="match day special").
                map((e) => {
                    return (
                        <div key={e._id}>
                            <ProductCard prod={e} />
                        </div>
               
                )
            })}
        </GridCol2>
    )
}