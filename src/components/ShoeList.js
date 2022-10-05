import React from "react";
import axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  render() {
    const { project } = this.state;
    return (<div>
    <h1>Shoe list...</h1>
    </div>
    );
  }
}
export default Details;
