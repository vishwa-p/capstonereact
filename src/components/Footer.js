import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function Footer()  {
  var hideHeaderPaths = ['/login','/register','/'];
  const { pathname } = useLocation(); 
  console.log(pathname);
    return (
      
     <div>
     {!hideHeaderPaths.includes(pathname) &&
        <div className="c-footer-legal c-footer--raised">
          <h1><a href="">ShoeFactory</a></h1>
          <p className="ftrp">@2022-2023 The Shoe Group Inc. All rights reserved.</p>
          <ul className="ftr">
            <li>
              <a href="/dashboard">HOME</a>
            </li>
            <li>
              <a href="/shoelist">SHOES</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
        </div>
     }
      </div>
    
      
    
    );
  }

export default Footer;
