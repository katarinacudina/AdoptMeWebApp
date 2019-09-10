import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const checkIfValid = errors => {
  var isValid = true;
  Object.values(errors).forEach(element => {
    element.length > 0 && (isValid = false);
  });
  return isValid;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      }
    };
  }
  registerUser = () => {
    axios
      .post("/api/createUser", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (checkIfValid(this.state.errors)) {
      console.log("Submitting... ", this.state);
      this.registerUser();
    } else {
      console.error("Error");
    }
  };

  handleChange = e => {
    e.preventDefault();

    var { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "username":
        errors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        errors.email = emailRegex.test(value) ? "" : "invalid email address";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="register-wrapper">
        <div className="form-wrapper">
          <h1> Create account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName"> First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                noValidate
                name="firstName"
                onChange={this.handleChange}
              />
              {errors.firstName.length > 0 && (
                <span className="errorMessage"> {errors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName"> Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                noValidate
                name="lastName"
                onChange={this.handleChange}
              />
              {errors.lastName.length > 0 && (
                <span className="errorMessage"> {errors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                className=""
                placeholder="Email"
                noValidate
                name="email"
                onChange={this.handleChange}
              />
              {errors.email.length > 0 && (
                <span className="errorMessage"> {errors.email}</span>
              )}
            </div>
            <div className="username">
              <label htmlFor="username"> Username</label>
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
              {errors.password.length > 0 && (
                <span className="errorMessage"> {errors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit"> SUBMIT</button>
              <small>Already have an account? </small>
              <Link to="/login">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
