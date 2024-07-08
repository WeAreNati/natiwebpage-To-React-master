import React from "react";
import Sprite from "./Sprites"; // Make sure this path is correct

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Sprite /> {/* Load the sprite */}

        <div className="content">
          <svg className="footer-logo" data-reveal="top" viewBox="0 0 5545 1005">
            <use href="#logo-sigle"></use>
            <use href="#logo-txt" transform="scale(1.15)" x="1200" y="300"></use>
          </svg>

          <div className="avert">
            <p className="max" data-reveal="">
              $NATI is a meme coin with no intrinsic value or expectation of financial return.
            </p>

            <p data-reveal="">
              This is a community-driven development (CDD) project, run by a community moving in harmony.
            </p>
          </div>

          <div className="copyright" data-reveal="">
            &copy; 2023 Illuminati Coin. All rights reserved.
          </div>
        </div>

        <div className="footer-back">
          <strong data-reveal="">Illuminati</strong>
        </div>
      </footer>
    );
  }
}

export default Footer;
