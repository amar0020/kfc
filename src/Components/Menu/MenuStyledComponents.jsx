import { Link } from "react-router-dom"
import styled from "styled-components"

//top start order div
export const RsMenuTopDiv=styled.div`
    background-color:rgb(41, 40, 40);

    & h4{
       color:white
    }
`

// buttons
export const RsMenuBtn = styled.button `
    background-color:rgb(219, 11, 39);
    border:none;
    border-radius:30px;
    padding:1%;
    font-size:20px;
    font-weight:600;
    min-width:200px;
    color:white;
    margin:1%;
    margin-left:10%;
` 


// side bar
export const RsMenuDispBar = styled.div`
    display:grid;
    grid-template-columns:20% 80%;
    width:80%;
    margin:auto;
    /* border:1px solid goldenrod; */
    padding:1% 2%;
    text-align: left;
    
`
// kfc logo div
export const RsSideKfcLogo = styled.div`
    background-color:  rgb(231, 8, 8);
    width:4%;
    margin-right:-8px;
    /* height:10%; */
    
`
export const MyLink = styled.a`
    text-decoration:none;
    color:black;
`
// search bar
export const MenuSearch = styled.input`
    border: 1px solid gray;
    border-radius:30px;
    padding:1%;
`
// grids in menu page display
export const GridDiv = styled.div`
    border:1px solid red;
`
export const GridCol2= styled.div`
    display:grid;
    grid-template-columns:repeat(2,48%);
    gap:1%;
    border:1px sold gray;
    background-color: #f1eeee;

    height:fit-content;
    margin:auto;
`
export const GridCol3= styled.div`
    display:grid;
    grid-template-columns:repeat(3,auto);
    gap:2%;
    border:1px sold gray;
    background-color: #f1eeee;

    height:fit-content;
    margin:auto;
`

// menucard div
export const RsMenucard = styled.div`
padding-left:3%;
border:transparent;
height:450px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
margin-bottom:1%

& div{
    height:30%;
    border:transparent;
    margin:auto;
}
& img {
    width:90%;
    height:100%;
    
}
`

// link decoration
export const StyledLink =styled(Link) `
    color:gray;
    text-decoration:none;
`