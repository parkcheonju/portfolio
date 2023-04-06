import React from "react";
import "../css/Sections.css";

export default function Section1() {
  return (
    <div className="Section1">
      <div className="Section1_right">
        <div className="Section1_right-img">이미지가 들어갈 자리입니다</div>
      </div>
      <div className="Section1_container">
        <div className="Section1_left">
          <div className="Section1_left-top">
            <h3>
            <span className='Section1_left-name'>이름소개문구</span>
            </h3>
          </div>
          <div className="Section1_left-bottom">
            <span className='Section1_left-job'>
            "Independent Web Developer"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
