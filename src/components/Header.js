import React from "react";
import axios from "axios";
import {useLocation } from "react-router-dom";


function Header() {
  var hideHeaderPaths = ['/login','/register','/'];
  const { pathname } = useLocation();
    return (
      <div>
      {!hideHeaderPaths.includes(pathname) &&       
      <nav className="navbar">
      <ul className="dashbrdnav">
        <li>
          <a href="/dashboard">HOME</a>
        </li>
        <li>
          <a href="/shoelist">SHOES</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
        <button className="logout"><a href="/login">Logout</a></button>
        </li>
      </ul>
    </nav>
      }
      </div>
    );
  }
export default Header;
