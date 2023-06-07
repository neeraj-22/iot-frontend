import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
  return (
    <Fragment>
      <div style={{background:"url(https://i.ytimg.com/vi/AtrFRWNJuNY/maxresdefault.jpg)"}}>
      <header className="masthead text-white text-center" style={{backgroundColor:"rgba(0,0,0,0.75)"}}>
        <h1><b>SMARTFIELDS : REVOLUTIONIZING AGRICULTURE WITH IOT-BASED MONITORING AND AUTO-IRRIGATION</b></h1>
        <h4>- By Neeraj Gandhi, Kunal Das and Divyansh Agarwal</h4>
        <br/>
        <h4>Applications of the Project</h4>
        <div className="hero-container d-flex align-items-center flex-column">
          <TypeAnimation
            cursor={true}
            sequence={[
              "Temperature Sensing",
              2000,
              "Rain Sensing",
              2000,
              "Moisture Sensing",
              2000,
              `Humidity Sensing`,
              2000,
              "IOT Network and controlling",
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
          />
        </div>
        <br/>
        <br/>
        <Link to={"/dashboard"} style={{color:"white"}}><h5>See Dashboard <i className="fas fa-arrow-right"></i></h5></Link>
      </header>
      </div>
    </Fragment>
  );
};

export default Hero;
