import React, { Component } from 'react';
import axios from "axios";
import imgfile from "../images/mainbg.webp";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoelist: [],
    };
  }
  componentDidMount() {
    axios({
      url: "https://vishwapcapstonelaravel.herokuapp.com/api/shoes",
      method: "GET",
    }).then((res) => {
      // console.log("shoelist:", res.data);
      this.setState({
        shoelist: res.data,
      });
    });
  }
  render() {
    const { shoelist } = this.state;
    const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Shoe Collection"
			},
			data: [{
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
					{ y: 19, label: "Football" }
				]
			}]
      
		}
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
        <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        <section className="shoelist ">         
          {shoelist.map((shoe) => (
            <div className="shoe" key={shoe.id}>             
              <img
                src={shoe.photo}
                alt="shoeimg"
                width={300}              
                height={300}
                className="shoeimg"
              ></img><br></br>
              <h5 className="shoehead">{shoe.name} </h5>
              <span className="shoeprice" dangerouslySetInnerHTML={{ __html: shoe.price }}></span><br></br>
              <span className="shoetype" dangerouslySetInnerHTML={{ __html: shoe.type }}></span>
              <p className="des" dangerouslySetInnerHTML={{ __html: shoe.description }}></p>
              <br></br>
              
            </div>
          ))}          
        </section>
      </div>
    );
  }
}
export default Details;
