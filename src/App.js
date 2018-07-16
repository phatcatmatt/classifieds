import React, { Component } from 'react';
import './App.css';
import ForSaleContainer from './containers/ForSaleContainer';
import NewListingContainer from './containers/NewListingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewListingContainer />
        <ForSaleContainer />
      </div>
    );
  }
}

export default App;
