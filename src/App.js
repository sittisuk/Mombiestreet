import React, { Component } from 'react';
import Navbars from './components/header/navbar';
import BottomHead from './components/content/bottomHead';
import OurExpert from './components/content/ourExpertise';
import Fullcontent from './components/content/fullcontent';
import Footer from './components/content/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbars />
        <BottomHead />
        <OurExpert />
        <Fullcontent />
        <Footer />
      </div>
    );
  }
}

export default App;
