import { useState,useContext } from "react";

import { Cartcontext } from "../cartcontext/Cartcontex";

import './Login.css'


const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  
  const {status,uid,handlecartchange} = useContext(Cartcontext)


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://gentle-escarpment-82476.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers:{
        "Content-Type":'application/json'
      }
      
    }).then((res)=>res.json()).then((data)=>{

      console.log(uid,status)

      if(data.message==="Registration successfull")
      handlecartchange(data.id,"true")

      console.log(uid, status)
      alert(data.message)
  })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>

      <input
        type="text"
        onChange={handleChange}
        // value={formData.name}
        name="name"
        className="Ainput"
        placeholder="Enter Your Name"
        id="name"
      />
      <br />

      <label>Email:</label>

      <input
        type="text"
        onChange={handleChange}
        // value={formData.email}
        className="Ainput"
        placeholder="Enter Your Email"
        id="email"
      ></input>
      <br />

      <label>Password:</label>

      <input
        type="password"
        onChange={handleChange}
        //  value={formData.password}
        className="Ainput3"
        placeholder="Enter Your Password"
        id="password"
      ></input>

      <p className="Apara">
        By “logging in to KFC”, you agree to our <b>Privacy Policy</b> and{" "}
        <b>Terms & Conditions</b>.
      </p>

      <input type="submit" className="button-27" value="Sign Up"></input>

      <p className="Aorpara">or</p>
      <button className="Abtn2">Skip, Continue As Guest</button>
    </form>
  );
};

export default Signup
