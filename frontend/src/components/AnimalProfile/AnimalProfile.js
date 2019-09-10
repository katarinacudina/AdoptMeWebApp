import React, { Component } from "react";
import axios from "axios";
import "./AnimalProfile.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

var images = require.context("../../../public/photo-utils", true);

class AnimalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: {}
    };
  }

  componentDidMount() {
    this.getAnimalProfile();
  }
  getAnimalProfile = () => {
    axios
      .get(`/api/getAnimalById/${this.props.match.params.animal_id}`)
      .then(res => {
        this.setState({ animal: res.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  backToPreviousPage = () => {
    this.props.history.goBack();
  };
  handleAdoptClick = e => {
    e.preventDefault();
    this.props.history.push("/contact");
  };
  handleAddToFavorites = () => {
    this.props.history.push("/user/favorites");
  };
  render() {
    var path = "",
      test = "";
    test = this.state.animal.image_path;
    typeof test !== "undefined"
      ? (path = images(`./${test}`))
      : console.log("undefined");
    var { animal } = this.state;
    return (
      <div className="row-adopt">
        <div className="leftcolumn">
          <div className="card">
            <img className="fakeimg" src={path} alt={"article_photo"} />
          </div>
        </div>
        <div className="adopt-column">
          <div className="card">
            <h1>{animal.name}</h1>
            <p className="type">
              ·{" "}
              {typeof animal.type !== "undefined"
                ? animal.type.toUpperCase()
                : animal.type}{" "}
              ·{" "}
              {typeof animal.gender !== "undefined"
                ? animal.gender.toUpperCase()
                : animal.gender}
            </p>
            <button className="adopt-page-btn" onClick={this.handleAdoptClick}>
              {" "}
              Adopt {animal.name}
            </button>
            <button className="add-to-favs" onClick={this.handleAddToFavorites}>
              <FontAwesomeIcon
                icon={faHeart}
                className="heart-icon"
                size="1x"
              />
              {"  "}
              Add to favorites
            </button>
          </div>
        </div>
        <div className="leftcolumn">
          <div className="card">
            <p>{animal.text}</p>
            <Link onClick={this.backToPreviousPage}>Back to previous page</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalProfile;
