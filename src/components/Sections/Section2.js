import React from "react";
import "../css/Sections.css";

export default function Section2() {
  return (
    <div className="Section2">
      <div className="Section2_container">
        <div className="Section2_inner">
          <div className="Section2_left">
            <img src="https://fastly.picsum.photos/id/912/510/510.jpg?hmac=GlBZA0ocDBJw3zy5KoRDwlT8QYpokslg5pqQ9YjZLiU" alt="About Me" />
          </div>
          <div className="Section2_right">
            <div className="Section2_right-title">
              <span>About Me</span>
              <h3>Creative Independent Web Developer based in Australia</h3>
            </div>
            <div className="Section2_right-text">
              <p>
                I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and
                collaboration.
              </p>
            </div>
            <div className="Section2_right-site">
              <div className="Section2_right-button">
                <a href="#none">git hub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
