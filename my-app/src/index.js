import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./assets/styles/style.css";
import Navbar1 from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: " rgba(0, 0, 0, 0.7)",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
  borderRadius: "50px"
  //   overflow: "auto"
};

// const image1 =
//   "../assets/images/PhillyOne.jpg";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const App = () => (
  <div style={styles}>
    <Navbar1 />
    <Parallax bgImage={require("./assets/images/PhillyOne.jpg")} strength={600}>
      <div style={{ height: 600 }}>
        <Row style={insideStyles}>
          <Row>
            <Header />
          </Row>
          <Row>
            <Bio className="hide-mobile" />
          </Row>{" "}
        </Row>
      </div>
    </Parallax>
    <p>| | |</p>
    <Parallax bgImage={image3} strength={500} blur={{ min: -5, max: 10 }}>
      <div style={{ height: 300 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <p>| | |</p>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <p>| | |</p>
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
