import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tab.css";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maci: "sta"
    };
  }
  render() {
    return (
      <div className="menu-tab">
        <Link className="tab-link" to={`/${this.props.tag}`}>
          <FontAwesomeIcon
            id={`card-icon-${this.props.tag}`}
            icon={this.props.icon}
            size="3x"
          />
          <div className="card-text-container">
            <p className="card-title">{this.props.title}</p>
            <p className="card-description">{this.props.desc}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Tab;
