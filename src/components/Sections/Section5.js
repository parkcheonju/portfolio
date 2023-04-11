import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import "../css/Section5.css";

export default function Section5() {
  return (
    <div className="Section5">
      <Container fluid="container-xxl" className="Section5_inner">
        <Row className="Section5_container">
          <Col lg="4" className="Section5_left">
            <div className="Section5_left-title">
              <h2>
                Our
                <br />
                Awards
              </h2>
            </div>
            <div className="Section5_left-text">
              <p>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.</p>
            </div>
          </Col>
          <Col lg="8" className="Section5_right">
            <div className="Section5_right-history Section5_pd-bottom30 Section5_pd-top30">
              <div className="Section5_history-container">
                <div className="Section5_history-year">2021</div>
                <div className="Section5_history-marker">
                  <img src="/images/brand_logo-3.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">POTY 2021</div>
                <div className="Section5_history-year">
                  See project
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
            </div>
            <div className="Section5_right-history Section5_history-line">
              <div className="Section5_history-container">
                <div className="Section5_history-year">2020</div>
                <div className="Section5_history-marker">
                  <img src="/images/brand_logo-2.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">Best 20 Websites Favourite 2020</div>
                <div className="Section5_history-year">
                  See project
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
            </div>
            <div className="Section5_right-history Section5_pd-top30">
              <div className="Section5_history-container">
                <div className="Section5_history-year">2019</div>
                <div className="Section5_history-marker">
                  <img src="/images/brand_logo-1.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">1st Winner Portfolio Review US 2019</div>
                <div className="Section5_history-year">
                  See project
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
