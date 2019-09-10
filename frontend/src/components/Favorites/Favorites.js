import React, { Component } from "react";
import "./Favorites.css";
import AnimalTile from "../AnimalTile/AnimalTile";
import axios from "axios";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    };
  }
  componentDidMount() {
    axios
      .get(`/api/getFavorites`)
      .then(res => this.setState({ animals: res.data }));
    console.log("res", this.state.animals);
  }
  render() {
    const rows = [...this.state.animals];
    return (
      <div className="favorites-container">
        <div className="tile-container">
          {rows.map((animal, i) => (
            <AnimalTile key={i} animal={animal} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
