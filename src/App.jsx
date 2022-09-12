import logo from './logo.svg';
import './App.css'

import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Deals from "./Components/Deals";
import Modal1 from "./Components/Modal1";
import Modal2 from "./Components/Modal2";
import Modal3 from "./Components/Modal3";
import Navbar from "./Components/Navbar"
import Login from './Components/Login'
import Signup from "./Components/Signup"
import { MenuPage } from './Components/Menu/MenuPage';
import { CategoryDisplay } from './Components/Menu/CategoryWiseDisplay';
import { SearchDataDetails } from './Components/Menu/SearchDataDisplay';
import Footer from './Components/Footer';

import Cart from "./Components/Cart"

import {CheckoutPage} from "./Components/CheckoutPage"

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/deals/modal1" element={<Modal1 />} />
        <Route path="/deals/modal2" element={<Modal2 />} />
        <Route path="/deals/modal3" element={<Modal3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/product" element={<MenuPage />} />
        <Route path="/product/category/:category" element={<CategoryDisplay />}></Route>
        <Route path="/product/:id" element={<SearchDataDetails/>}></Route>

        <Route path="/cart" element={<Cart/>}></Route>

        <Route path="/checkout" element={<CheckoutPage/>}></Route>
      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
