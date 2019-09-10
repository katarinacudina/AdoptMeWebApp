import React, { Component } from "react";
import "./ContactPage.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1>Contact us</h1>
          <form action="action_page.php">
            <label for="fname">Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Name" />

            <label for="lname">Email</label>
            <input type="text" id="lname" name="email" placeholder="Email" />

            <label for="lname">Phone Number</label>
            <input
              type="text"
              id="lname"
              name="number"
              placeholder="Phone Number"
            />

            <label for="subject">Your inquiry</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write your inquiry here.."
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
