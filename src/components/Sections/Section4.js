import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Section4.css";

export default function Section4() {
  return (
    <div className="Section4">
      <Container fluid="container-xxl" className="Section4_inner Section4_pd">
        <div className="Section4_container">
          <div className="Section4_top">
            <h2>Approach</h2>
          </div>
          <Row className="Section4_bottom">
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                ONE
                <h3>Research</h3>
              </div>
              <div className="Section4_approach-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.</p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                TWO
                <h3>Concept</h3>
              </div>
              <div className="Section4_approach-description">
                <p>Donec venenatis consequat libero, quis auctor nunc volutpat quis. Proin at ipsum id magna dapibus dictum eget lobortis magna. Fusce et ligula non tellus vulputate condimentum.</p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                THREE
                <h3>Strategy</h3>
              </div>
              <div className="Section4_approach-description">
                <p>Consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
