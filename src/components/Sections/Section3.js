import React from "react";
import { Container } from "react-bootstrap";
import "../css/Section3.css";

export default function Section3() {
  return (
    <div className="Section3">
      <Container fluid="container-xxl" className="Section3_inner">
        <div className="Section3_container">
          <div className="Section3_top">
            <div className="Section3_top-title">
              <h2>Latest Works</h2>
            </div>
            <div className="Section3_top-list">
              <span>All Projects</span>
              <img src="/images/arrow.png" alt="linkicon" />
            </div>
          </div>
          <div className="Section3_bottom">
            <div className="Section3_bottom-container">
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">
                  <img src="/images/work-1.png" alt="work_data" />
                </div>
                <div className="Section3_item-text">
                  <div className="Section3_item-title">UI/UX</div>
                  <div className="Section3_item-description">
                    <h4>Liarch Architecture Firm</h4>
                  </div>
                </div>
              </div>
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">
                  <img src="/images/work-2.png" alt="work_data" />
                </div>
                <div className="Section3_item-text">
                  <div className="Section3_item-title">UI/UX</div>
                  <div className="Section3_item-description">
                    <h4>Taskly Dashboard</h4>
                  </div>
                </div>
              </div>
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">
                  <img src="/images/work-3.png" alt="work_data" />
                </div>
                <div className="Section3_item-text">
                  <div className="Section3_item-title">Product</div>
                  <div className="Section3_item-description">
                    <h4>Film & Art Festival</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
