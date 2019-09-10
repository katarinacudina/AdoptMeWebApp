import React, { Component } from "react";
import axios from "axios";
import AnimalTile from "../AnimalTile/AnimalTile";
import SearchBar from "../SearchBar/SearchBar";
import "./AdoptPage.css";
class AdoptPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/getAnimals")
      .then(res => this.setState({ animals: res.data }));
    console.log("res", this.state.animals);
  }
  searchForItem = e => {
    // Declare variables
    var filter, tiles, title, i, txtValue;
    filter = e.target.value.toUpperCase();
    console.log(filter);
    tiles = document.getElementsByClassName("column");
    console.log("tiles", tiles.length);

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tiles.length; i++) {
      title = tiles[i].getElementsByTagName("h1")[0];
      txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tiles[i].style.display = "";
      } else {
        tiles[i].style.display = "none";
      }
    }
  };

  render() {
    const rows = [...this.state.animals];
    return (
      <div className="adopt-page-container">
        <SearchBar searchForItem={this.searchForItem} />
        <div className="tile-container">
          {rows.map((animal, i) => (
            <AnimalTile key={i} animal={animal} />
          ))}
        </div>
      </div>
    );
  }
}

export default AdoptPage;
