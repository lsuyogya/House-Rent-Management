import React from "react"
import { useState } from "react"
import Button from "./Button"
import Google from "./../assets/GoogleButton.svg"
import Facebook from "./../assets/FacebookButton.svg"
import {Login as loginapi} from "./api"


const Form = () => {

  const [formDetails,setFormDetails] = useState({username: "", password: ""})

  const handleChange = (e) => {
      const value = e.target.value;
      setFormDetails({...formDetails, [e.target.name]: value});
  }
  

  
return (
<form className="login">
  <p>Enter your credentials and Log in to your dashboard</p>

  <input name="username" type="text" placeholder="Username" className="textField" onChange={handleChange} />
  <input name="password" type="password" placeholder="Password" className="textField" onChange={handleChange} />
  

  <div style={{display: "flex",marginTop: "5px" }}>
    <input type="checkbox" className="checkBox" name="Remember me" />
    <label className="checkBox label">Remember me</label>
  </div>

  <Button label="Sign in" size="large" variant="outline" onclick={(e)=>loginapi(formDetails, e)} />

  <span className="secondaryText">Don’t have an account?</span> 
  <span className="highlight"> Create your account </span>

  <div className="lineDiv">
    <span className="secondaryText">Or sign in with
      <span style={{fontWeight:600, color: "#fff"}}>Social Media</span>
    </span>
  </div>

  <div className="socialPlug">
    <img src={Google} alt="Google"/>
    <img src={Facebook} alt="Facebok"/>
  </div>

</form>
);
};

export default Form;