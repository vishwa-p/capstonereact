import React from "react";
import axios from "axios";

import ReactPlayer from "react-player";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  render() {
    return (
      <div>        
        <div className="c-editorial-top-story__header">
          <div className="c-editorial-top-story__header-headings">
            <h1 className="c-heading c-cms-module-header c-cms-module-header--has-small-padding">
              Pillow Walk Heels
            </h1>
            <p className="c-editorial-top-story__description">
              Expect the unexpected with our latest edit of feel-good heels
              designed with pillowy soles for dreamy comfort.
            </p>
          </div>
          <div className="c-editorial-top-story__header-ctas">
            <a className="u-btn u-btn--tertiary u-btn--is-small c-editorial-top-story__cta">
              Shop women's heels
            </a>
            <a className="u-btn u-btn--tertiary u-btn--is-small c-editorial-top-story__cta">
              Learn More
            </a>
          </div>
        </div>
        <ReactPlayer
          url="https://youtu.be/AYtbfj4cO2E"
          width={1000}
          height={450}
          className="pillowvideo"
        />
        <div className="c-editorial">
          <div className="c-editorial__wrapper o-container c-editorial__wrapper-with-text c-editorial__wrapper-text-and-image">
            <div className="c-editorial__wrap-image">
              <img
                src="https://i.ibb.co/CP4GDdh/bg.jpg"
                className="lazyautosizes ls-is-cached lazyloaded"
              ></img>
            </div>
            <div className="c-editorial-banner-text">
              <div className="c-editorial-banner-text__wrapper-title">
              <h1 className="c-heading c-editorial-banner-text__title">
              <span className="c-markdown">But First, Boots</span>
              </h1>
              </div>
              <div className="c-editorial-banner-text__wrapper-description">
              <span className="c-markdown c-editorial-banner-text__description">Perfect your look from the ground up with this season’s best boot silhouettes. Consider this your boot wish list</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cele">
        <h1>Celebrate 50 With Us<br></br><span className="spn">In honor of our 50th anniversary, our founder Mr. B will be hosting master classes across Canada! Enter for a chance to win - limited spots available.</span>
        </h1>
        
        <img src="https://media.aldoshoes.com/assets/aldo/2022/aldo-50th/50th-contest-slimedi/50th-contest-slimedi_549x309.jpg" className="imgcele"></img>
        <div>
        
        </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
