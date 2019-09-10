import React, { Component } from "react";
import Logo from "./logo2.png";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: sessionStorage.getItem("username")
    };
  }
  handleUnderline = e => {
    var nav = document.getElementById("header-right");
    var navs = nav.getElementsByClassName("nav-link");
    console.log(navs.length);
    Array.from(navs).forEach(
      el => (el.className = el.className.replace(" active", ""))
    );

    e.target.className += " active";
  };

  render() {
    return (
      <header id="top-header">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
          <p>adopt-me</p>
        </Link>
        <div id="header-right">
          <Link to={"/"} className="nav-link" onClick={this.handleUnderline}>
            {" "}
            HOME{" "}
          </Link>

          <Link
            to={"/adopt"}
            className="nav-link"
            onClick={this.handleUnderline}
          >
            ADOPT
          </Link>

          <Link
            to={"/blog"}
            className="nav-link"
            onClick={this.handleUnderline}
          >
            BLOG
          </Link>

          <Link
            to={"/login"}
            className="nav-link"
            onClick={this.handleUnderline}
          >
            {!this.props.isLoggedOn ? "LOGIN" : ""}
          </Link>

          <Link
            to={"/userProfile"}
            className="nav-link"
            onClick={this.handleUnderline}
          >
            {!this.props.isLoggedOn ? "" : sessionStorage.getItem("username")}
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
