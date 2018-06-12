import React, { Component } from 'react';
import ClassifiedListItemComponent from './components/classified-list-item-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassifiedListItemComponent />
      </div>
    );
  }
}

export default App;
