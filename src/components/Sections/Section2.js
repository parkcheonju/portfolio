import React from "react";
import "../css/Section2.css";

export default function Section2() {
  return (
    <div className="Section2">
      <div className="Section2_inner">
        <div className="Section2_comtainer">
          <div className="Section2_left">
            <div className="Section2_left-title">
              <h2>
                Our
                <br />
                Services
              </h2>
            </div>
            <div className="Section2_left-text">
              <p>We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.</p>
            </div>
          </div>
          <div className="Section2_right">
            <div className="Section2_right-container">
              <div className="Section2_right-item">
                <img src="/images/brand.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>
                    BRAND
                    <br />
                    CONSULTANT
                  </h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/uiux.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>
                    UI/UX
                    <br />
                    SOLUTION
                  </h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/packaging.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>
                    PACKAGING
                    <br />
                    SOLUTION
                  </h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/motion.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>
                    MOTION VIDEO
                    <br />
                    &amp; TVC
                  </h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/arrow.png" alt="linkicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
