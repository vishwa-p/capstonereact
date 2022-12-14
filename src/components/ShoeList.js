import React, { Component } from "react";
import axios from "axios";
import imgfile from "../images/mainbg.webp";
import CanvasJSReact from "./canvasjs.react";
import { Button, Popup, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { type } from "@testing-library/user-event/dist/type";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoelist: [],
      filteredlist: []
    };
    this.filterlist = this.filterlist.bind(this);
  }
  componentDidMount() {
    axios({
      url: "https://vishwapcapstonelaravel.herokuapp.com/api/shoes",
      method: "GET",
    }).then((res) => {
      console.log("shoelist:", res.data);
      this.setState({
        shoelist: res.data,
      });
      this.filterlist('');
    });
    
  }

  filterlist(query) {
    // e.preventdefault();
    var test = [];
    this.state.shoelist.filter(x => x.type.includes(query)).map(filteredName => (
      test.push(filteredName)
    ))

    // test = this.state.shoelist.filter(function (str) { return str.includes('Sports'); });
    this.setState({
      filteredlist: test,
    });
    console.log(test);
    
  }

  render() {
    const { shoelist,filteredlist } = this.state;
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Shoe Collection",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Sports" },
            { y: 49, label: "Boots" },
            { y: 9, label: "Walking" },
            { y: 5, label: "Running" },
            { y: 19, label: "Football" },
          ],
        },
      ],
    };
    return (
      <div>
        <img src={imgfile}></img>
        <div className="shoebody">
          <img src="https://i.ibb.co/r4DwMm4/w-sneakers-header560x315.jpg"></img>
          <h1>
            Women's Sneakers & <br></br>Athletic Shoes<br></br>
            <br></br>
            <p>
              Just dropped and ready to impress, discover comfy sneakers in
              must-have shades and silhouettes.
            </p>
          </h1>
        </div>
        <br></br>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        <div className="filterbtn">
        <button className="button-86" onClick={this.filterlist.bind(this,'Walking')}>Walking</button>
        <button className="button-86" onClick={this.filterlist.bind(this,'Running')}>Running</button>
        <button className="button-86" onClick={this.filterlist.bind(this,'Boot')}>Boots</button>
        <button className="button-86" onClick={this.filterlist.bind(this,'Sports')}>Sports</button>
        <button className="button-86" onClick={this.filterlist.bind(this,'Football')}>Football</button>
        <button className="button-86" onClick={this.filterlist.bind(this,'')}>ALL</button>
        </div>
        <section className="shoelist ">
          {filteredlist.map((shoe) => (
            <div className="shoe" key={shoe.id}>
              <img
                src={shoe.photo}
                alt="shoeimg"
                width={300}
                height={300}
                className="shoeimg"
              ></img>
              <br></br>
              <h5 className="shoehead">{shoe.name} </h5>
              <span
                className="shoeprice"
                dangerouslySetInnerHTML={{ __html: shoe.price }}
              ></span>
              <br></br>
              <span
                className="shoetype"
                dangerouslySetInnerHTML={{ __html: shoe.type }}
              ></span>
              <p
                className="des"
                dangerouslySetInnerHTML={{ __html: shoe.description }}
              ></p>
              <br></br>
              <div className="cart">
              <div>
              <Popup
                trigger={
                  <Icon name="heart" color="red" size="large" circular />
                }
                content="Put me in wishlist"
                position="top right"
              />
              </div>
              <div className="cart1">
              <Popup
              
                trigger={<Button icon="add" />}
                content="Add to cart."
                basic
              />
              </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
export default Details;
