import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);
// const renderErrorMessage = (name) =>
//   name === errorMessages.name && (
//     <div className="error">{errorMessages.message}</div>
//   );

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isAuthorised, setisAuthorised] = useState(true);
  async function handleClick(e) {
  
    e.preventDefault();
    try {
      let res = await fetch("https://vishwapcapstonelaravel.herokuapp.com/api/user/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {       
        if(resJson.data=="Yes"){    
          console.log("if..")      
          navigate("/dashboard");
          setisAuthorised(true);
        }
        else{
          console.log("else..")
          setisAuthorised(false);
        }
        setemail("");
        setpassword("");
  
        //   setMessage("User created successfully");
      }
       else {
        
        //   setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    // alert("Goes to registration page");
  }
  
  return (
    <div className="form">
    <div className="loginf">
    
      <form className="loginform">
      <h2>Login</h2>
        <div className="input-container">
         
          <input type="text" name="email" className="email" required  onChange={(e) => setemail(e.target.value)} placeholder="Enter Email"/>
        </div>
        <div className="input-container">
         
          <input type="password" name="pass" className="password" required onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" />
        </div>
        {!isAuthorised &&
        <div className="error">Invalid UserName or Password.</div>
        }
        <div className="button-container">
          <input type="submit" className="submitbtn" onClick={handleClick} />
        </div><br></br>
        <span className="signups"><a href="/register" className="newuser">Sign Up with Us</a></span>
      </form>
      
      </div>
    </div>
  );
}

const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();
};
export default Login;
