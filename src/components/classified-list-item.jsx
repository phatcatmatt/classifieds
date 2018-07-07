import React, { Component } from 'react';
// UI
import './classified-list-item.css';

class ClassifiedListItem extends Component {
  render() {
    const { title, price } = this.props;
    return (
      <li>{`${title} - $${price}`}</li>
      )
  }
}

export default ClassifiedListItem;