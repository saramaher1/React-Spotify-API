import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "fa-icons";
import "../src/App.css";
import { ImSpinner9 } from "react-icons/im";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-text">
          My Spotify
          <ImSpinner9 className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
