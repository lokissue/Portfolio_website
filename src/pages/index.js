import React, { Component } from 'react';
import Navbar from '../components/Nav/Navbar';
// import Footer from '../components/Footer';
import Home from "../components/Home"

export default class Index extends Component {
  render() {
    return (

      <div>
        
        <Navbar {...this.props} />
        <Home />
        {/* <Footer /> */}
      </div>
    )
  }
}
