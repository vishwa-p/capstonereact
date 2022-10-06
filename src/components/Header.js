import React from "react";
import axios from "axios";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  render() {
   
    return (
      <div>       
      <nav className="navbar">
      <ul className="dashbrdnav">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>SHOES</a>
        </li>
        <li>
          <a>ABOUT</a>
        </li>
      </ul>
    </nav>
      </div>
    );
  }
}
export default Header;
