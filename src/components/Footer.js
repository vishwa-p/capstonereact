import React from "react";
import axios from "axios";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  render() {
    const { project } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}
export default Footer;
