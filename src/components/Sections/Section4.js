import React from "react";
import "../css/Section4.css";

export default function Section4() {
  return (
    <div className="Section4">
      <div className="Section4_inner">
        <div className="Section4_container">
          <div className="Section4_left">
            <div className="Section4_left-title">
              <h2>
                my
                <br />
                history
              </h2>
            </div>
            <div className="Section4_left-text">
              <p>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.</p>
            </div>
          </div>
          <div className="Section4_right">
            <div className="Section4_right-history Section4_pd-bottom30 Section4_pd-top30">
              <div className="Section4_history-container">
                <div className="Section4_history-year">Year</div>
                <div className="Section4_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section4_history-description">description</div>
                <div className="Section4_history-year">Year</div>
              </div>
            </div>
            <div className="Section4_right-history Section4_history-line">
              <div className="Section4_history-container">
                <div className="Section4_history-year">Year</div>
                <div className="Section4_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section4_history-description">description</div>
                <div className="Section4_history-year">Year</div>
              </div>
            </div>
            <div className="Section4_right-history Section4_pd-top30">
              <div className="Section4_history-container">
                <div className="Section4_history-year">Year</div>
                <div className="Section4_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section4_history-description">description</div>
                <div className="Section4_history-year">Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
