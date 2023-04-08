import React from "react";
import "../css/Section3.css";

export default function Section3() {
  return (
    <div className="Section3">
      <div className="Section3_inner">
        <div className="Section3_container">
          <div className="Section3_top">
            <div className="Section3_top-title">
              <h2>Latest Works</h2>
            </div>
            <div className="Section3_top-list">
              <span>All Projects</span>
              <img src="/images/dummyicon.png" alt="linkicon" />
            </div>
          </div>
          <div className="Section3_bottom">
            <div className="Section3_bottom-container">
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">img</div>
                <div className="Section3_item-title">title</div>
                <div className="Section3_item-description"><h4>description</h4></div>
              </div>
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">img</div>
                <div className="Section3_item-title">title</div>
                <div className="Section3_item-description"><h4>description</h4></div>
              </div>
              <div className="Section3_bottom-card">
                <div className="Section3_bottom-item">img</div>
                <div className="Section3_item-title">title</div>
                <div className="Section3_item-description"><h4>description</h4></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
