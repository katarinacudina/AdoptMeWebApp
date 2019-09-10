import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import BlogPage from "./components/BlogPage/BlogPage";
import LoginDialog from "./components/LoginDialog/LoginDialog";
import MainPage from "./components/MainPage/MainPage";
import ContactPage from "./components/ContactPage/ContactPage";
import AboutPage from "./components/AboutPage/AboutPage";
import AdoptPage from "./components/AdoptPage/AdoptPage";
import AnimalProfile from "./components/AnimalProfile/AnimalProfile";
import Article from "./components/Article/Article";
import Register from "./components/Register/Register";
import withAuth from "./components/withAuth/withAuth";
import UserProfile from "./components/UserProfile/UserProfile";
import Favorites from "./components/Favorites/Favorites.js";

class App extends React.Component {
  state = {
    data: null,
    username: "",
    isLoggedOn: false
  };
  getUsername = username => {
    this.setState(
      { username: username, isLoggedOn: true },
      console.log(this.state.username)
    );
  };

  render() {
    return (
      <Router>
        <Header isLoggedOn={this.state.isLoggedOn} />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/adopt" component={AdoptPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route
            path="/login"
            render={() => <LoginDialog getUsername={this.getUsername} />}
          />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/adopt/:animal_id" component={AnimalProfile} />
          <Route path="/blog/:news_id" component={Article} />
          <Route path="/register" component={Register} />
          <Route path="/userProfile" component={withAuth(UserProfile)} />
          <Route path="/user/favorites" component={withAuth(Favorites)} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
