import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick() {}
  render() {
    return (
      <div>
        <div className="header">
          <div className="info">
            <h1>Hundreds of pets are waiting for you !</h1>
            <div className="meta">
              <Link to="/adopt" className="adopt-btn">
                {" "}
                ADOPT
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
