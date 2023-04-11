import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Section1.css";

export default function Section1() {
  return (
    <div className="Section1">
      <Container fluid="xxl" className="Section1_inner">
        <Row className="Section1_container">
          <Col xl="9" className="Section1_left">
            <div className="Section1_left-title">
              <h1>Moonex</h1>
            </div>
            <div className="Section1_left-text1">
              <p>
                Crafting Digital
                <br />
                Agency
              </p>
            </div>
            <div className="Section1_left-text2">
              <p>
                Good design mean that
                <br />
                good business
              </p>
            </div>
            <div className="Section1_left-text3"></div>
            <div className="Section1_left-text4">
              <Col xl="8">
                <p>We help our client suceed by creating identities, digital experiences, and printmaterials that communicate clearly, achieve marketing goals</p>
              </Col>
            </div>
            <div className="Section1_left-site">
              <div className="Section1_left-btn">
                <a href="#none">Learn More</a>
              </div>
            </div>
          </Col>
          <Col xl="3" className="Section1_right">
            <div className="Section1_right-top"></div>
            <div className="Section1_right-bottom"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
