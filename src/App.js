import React, { Component } from 'react';
import ClassifiedListItem from './components/classified-list-item';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassifiedListItem />
      </div>
    );
  }
}

export default App;
