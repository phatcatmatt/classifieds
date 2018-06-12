import React, { Component } from 'react';
import './classified-list-item-component.css';

class ClassifiedListItemComponent extends Component {
  render() {
    return (
      <div className="classified-list-item">
        <h1>Post Title</h1>
        <h2>$price</h2>
        <h3>Location of Item</h3>
        <h3>Item category</h3>
        <p>A short description of the item...</p>
      </div>
    )
  }
}

export default ClassifiedListItemComponent;