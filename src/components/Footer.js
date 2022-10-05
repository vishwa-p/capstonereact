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
    return (<div>
    <h1>footer...</h1>
    </div>
    );
  }
}
export default Footer;
