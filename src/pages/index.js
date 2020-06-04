import React, { Component } from 'react';
import Layout from '../components/Layout';
// import Footer from '../components/Footer';
import Home from "../components/Home"

export default class Index extends Component {
  render() {
    return (

      <div>
        
        <Layout {...this.props} />
        <Home />
        {/* <Footer /> */}
      </div>
    )
  }
}
