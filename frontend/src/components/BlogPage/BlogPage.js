import React, { Component } from "react";
import axios from "axios";
import NewsTile from "../NewsTile/NewsTile";
import "./BlogPage.css";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    axios.get("/api/getAllNews").then(res => this.setState({ news: res.data }));
  }
  render() {
    const { news } = this.state;
    return (
      <div id="cont">
        {news.map((el, i) => (
          <NewsTile key={i} article={el} />
        ))}
      </div>
    );
  }
}

export default BlogPage;
