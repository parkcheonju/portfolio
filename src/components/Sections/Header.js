import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header_logo">
        <div className="Header_logo-img">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>
      <div className="Header_nav">
        <div className="Header_nav-menu">Home</div>
        <div className="Header_nav-menu">About</div>
        <div className="Header_nav-menu">Portfolio</div>
        <div className="Header_nav-menu">News</div>
        <div className="Header_nav-menu">Contact</div>
      </div>
    </div>
  );
}
