import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom"
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Article />
        <Bottom />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;

