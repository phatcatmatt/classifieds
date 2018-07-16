import React, { Component } from 'react';
// UI
import './ClassifiedListItem.css';

class ClassifiedListItem extends Component {
  render() {
    const { title, price } = this.props;
    return (
      <li>{`${title} - $${price}`}</li>
      )
  }
}

export default ClassifiedListItem;