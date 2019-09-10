import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NewsTile.css";
var images = require.context("../../../public/photo-utils", true);

class NewsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ""
    };
  }
  componentDidMount() {
    this.setState({ desc: this.stringGenerator() });
  }
  stringGenerator = () => {
    var string = this.props.article.text;
    string = string.slice(0, 200);
    return string;
  };
  render() {
    var path = images(`./${this.props.article.image_path}`);
    return (
      <div id="blog-tile-container">
        <Link className="card-link" to={`/blog/${this.props.article.news_id}`}>
          <div className="blog-card">
            <img className="post-image" src={path} alt={path} />
            <div className="article-details">
              <h4 className="post-category">Pets</h4>
              <h3 className="post-title">{this.props.article.title}</h3>
              <p className="post-description">
                {this.state.desc}...
                <Link to={`/blog/${this.props.article.news_id}`}>
                  Read more
                </Link>
              </p>
              <p className="post-author">By Jane Doe</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default NewsTile;
