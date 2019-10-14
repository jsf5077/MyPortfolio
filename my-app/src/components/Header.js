import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Header extends Component {
  render() {
    return (
        // <React Fragment>
            <Col className="text-center">
            <h1>Jeff Froehlich</h1>
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQGTBJeNxb_6OQ/profile-displayphoto-shrink_200_200/0?e=1576713600&v=beta&t=yB8SwURxP8tkDcATtPKC55G2J9MmmDCAfjuCqtxFgr4"
              roundedCircle
            />
          </Col>
          /* <Col xs={12} md={8}>
            <h4>
              Hello, I am a Full-Stack Web Developer leveraging 5+ years of
              experience in graphic design to build a unique user experience
              on web applications. Recently, I earned a certificate in
              Full-Stack Web Development from the University of Pennsylvania.
              I am passionate about newly my developed skills in Javascript,
              CSS, Bootstrap, React.js, MySQL, MongoDB, and responsive web
              design. Throughout my career, I have been a versatile problem
              solver with strong organizational skills, whose determination
              and patience has led to impactful results. I enjoy creating
              applications within a team setting that have strong UI’s that
              are easy-to-use and intuitive. I am looking forward to joining a
              team where I will contribute strengths in creativity, branding,
              and communication from my graphic design experience.
            </h4>
          </Col> */
        /* </React> */
    );
  }
}

export default Header;
