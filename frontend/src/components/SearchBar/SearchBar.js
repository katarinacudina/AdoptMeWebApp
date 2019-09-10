import React, { Component } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topnav">
        <div className="search-bar-title">Animals</div>
        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              id="myInput"
              onKeyUp={this.props.searchForItem}
              placeholder="Search..."
            />
            <div className="povecalo">
              <FontAwesomeIcon
                className="search-icon"
                icon={faSearch}
                size="2x"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
