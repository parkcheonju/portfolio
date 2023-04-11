import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Container fluid="xxl" className="Footer_inner">
        <Row className="Footer_container">
          <Col xl="6" className="Footer_contact-1">
            <div className="Footer_contact-title">Boost Your Business Up!</div>
            <div className="Footer_contact-text">Gyu Bok Park</div>
            <div className="Footer_contact-adress">Adress : 49, Hanbit-ro, Dongdaemun-gu, Seoul, Republic of Korea</div>
            <div className="Footer_contact-email">Email : gyubok@gmail.com</div>
          </Col>
          <Col md="6" className="Footer_contact-2">
            <h4>Link</h4>
            <ul>
              <li>
                <a href="#none">Project1</a>
              </li>
              <li>
                <a href="#none">Project2</a>
              </li>
              <li>
                <a href="#none">Project3</a>
              </li>
            </ul>
          </Col>
          <Col md="6" className="Footer_contact-3">
            <h4>View</h4>
            <ul>
              <li>
                <a href="#none">Section1</a>
              </li>
              <li>
                <a href="#none">Section2</a>
              </li>
              <li>
                <a href="#none">Section3</a>
              </li>
              <li>
                <a href="#none">Section4</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
