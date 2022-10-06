import React from "react";
import axios from "axios";
import { useState } from "react";
function Register() {
    const [first, setfirst] = useState("");
    const [last, setlast] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://vishwapcapstonelaravel.herokuapp.com/api/user/register", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({            
            first: first,
            last: last,
            email: email,
            password:password
          }),
        });        
        let resJson = await res.json();
        if (res.status === 200) {
          setfirst("");
          setlast("");
          setemail("");
          setpassword("");
          
        //   setMessage("User created successfully");
        } else {
        //   setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="App formpage">
      <div className="loginf">
        <form onSubmit={handleSubmit} className="loginform">
        <h1>Join Us.</h1>
          <input
            type="text"
            value={first}
            name="first"
            placeholder="First Name"
            className="fname"
            onChange={(e) => setfirst(e.target.value)}
          /><br></br>
          <input
            type="text"
            value={last}
            name="last"
            placeholder="Last Name"
            className="lname"
            onChange={(e) => setlast(e.target.value)}
          /><br></br>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email"
           
            onChange={(e) => setemail(e.target.value)}
          /><br></br>
          <input
            type="text"
            value={password}
            name="password"
            placeholder="Password"
           
            onChange={(e) => setpassword(e.target.value)}
          />
          <br></br>
          <button type="submit" className="regis">Register</button>
  
        
        </form>
        </div>
      </div>
    );
  }
  
  export default Register;