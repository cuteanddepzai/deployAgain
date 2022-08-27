import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Header/SlideShow.css";

const Slideshow = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss3_copy_1920x.jpg?v=1643782988",
    "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss2_copy_1920x.jpg?v=1643782958",
    "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ss1_copy_1920x.jpg?v=1643782619",
  ];
  return (
    <Slide cssClass="">
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }} className='each-slide-posi'>
          <div className="content1">
            <p>A new 13-inch and 15-inch</p>
            <h2>
              MacBook with <br /> retina display
            </h2>
            <a href="/" class="aplee-button aplee-button--medium">
              shop now
            </a>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }} className='each-slide-posi'>
          <div className="content1">
            <p>Apple Watch Series 7 </p>
            <h2>
              MacBook with <br /> retina display
            </h2>
            <a href="/" class="aplee-button aplee-button--medium">
              shop now
            </a>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }} className='each-slide-posi'>
          <div className="content1">
            <p>A new 13-inch and 15-inch</p>
            <h2>
              MacBook with <br /> retina display
            </h2>
            <a href="/" class="aplee-button aplee-button--medium">
              shop now
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
