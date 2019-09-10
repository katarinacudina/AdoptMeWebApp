import React, { Component } from "react";
import Heading from "../Heading/Heading";
import Tab from "../Tab/Tab";
import "./MainPage.css";
import {
  faNewspaper,
  faPhone,
  faInfo
} from "@fortawesome/free-solid-svg-icons";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          tag: "blog",
          title: "News",
          description: "Find out the newest meows",
          icon: faNewspaper
        },
        {
          tag: "about",
          title: "About us",
          description: "Learn more about wuffs",
          icon: faInfo
        },

        {
          tag: "contact",
          title: "Contact us",
          description: "Send your inquiries here",
          icon: faPhone
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Heading />

        <div className="flex-container">
          {this.state.tabs.map((tab, i) => (
            <Tab
              key={i}
              title={tab.title}
              tag={tab.tag}
              desc={tab.description}
              icon={tab.icon}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
