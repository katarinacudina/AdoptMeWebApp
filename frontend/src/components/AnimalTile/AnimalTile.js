import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AnimalTile.css";

var images = require.context("../../../public/photo-utils", true);

class AnimalTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let img_src = images(`./${this.props.animal.image_path}`);
    return (
      <Link className="column" to={`/adopt/${this.props.animal.animal_id}`}>
        <div className="post-module">
          <div className="thumbnail">
            <img src={img_src} alt={this.props.animal.name} />
          </div>

          <div className="post-content">
            <h1 className="title">{this.props.animal.name}</h1>
            <h2 className="sub_title">{this.props.animal.gender}</h2>
          </div>
        </div>
      </Link>
    );
  }
}

export default AnimalTile;
