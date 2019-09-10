import React, { Component } from "react";
import axios from "axios";
import "./Article.css";
import { Link } from "react-router-dom";
var images = require.context("../../../public/photo-utils", true);

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    this.getArticle();
  }
  getArticle = () => {
    axios
      .get(`/api/getNewsById/${this.props.match.params.news_id}`)
      .then(res => {
        this.setState({ article: res.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  backToPreviousPage = () => {
    this.props.history.goBack();
  };
  render() {
    var path = "",
      test = "";
    test = this.state.article.image_path;
    typeof test !== "undefined"
      ? (path = images(`./${test}`))
      : console.log("undefined");
    var { article } = this.state;

    return (
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h1>{article.title}</h1>
            <h5>Author: Jane Doe, Dec 7, 2017</h5>
            <img className="fakeimg" src={path} alt={"article_photo"} />
            <p>{article.text}</p>
            <Link onClick={this.backToPreviousPage}>
              Back to previous page...
            </Link>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h3>Just for you...</h3>
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
