import React, { Component } from "react";
import "./LoginDialog.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  example = () => {
    axios
      .get(`/api/getUserById/${this.state.username}/${this.state.password}`)
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("username", `${this.state.username}`);
          this.props.getUsername(this.state.username);
          this.props.history.push("/");
        } else alert("Error logging in, please try again.");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.example();
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1> Log in</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username-login"> Username</label>
              <input
                type="text"
                className=""
                placeholder="Username"
                noValidate
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                noValidate
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit"> Submit</button>
              <small>Don't have an account? </small>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginDialog);
