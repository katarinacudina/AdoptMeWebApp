import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            adopt-<span>me</span>
          </h3>

          <p className="footer-links">
            <Link to="#">Adopt</Link>·<Link to="#">Blog</Link>·
            <Link to="#">Contact</Link>·<Link to="#">About</Link>
          </p>

          <p className="footer-company-name">adopt-me &copy; 2019</p>
        </div>

        <div className="footer-center">
          <div>
            <FontAwesomeIcon icon={faMapMarker} className="faMapMarker" />
            <p>
              <span>Split, Croatia</span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faPhone} className="faPhone" />
            <p>+1 555 123456</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />
            <p>
              <Link to="mailto:support@company.com">contact@adopt_me.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Adopt-me is ran exclusively by volunteers, and strives to help all
            animals in need.
          </p>

          <div className="footer-icons">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className="faFacebook" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} className="faTwitter" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faLinkedin} className="faLinkedin" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faGithub} className="faGithub" />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
