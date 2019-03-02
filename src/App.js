import React, { Component } from 'react';
import Header from './components/header_footer/header';
import  './resources/styles.css';
import Featured from './components/feature';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "1500px"}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
