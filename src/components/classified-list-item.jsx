import React, { Component } from 'react';
// UI
import './classified-list-item.css';

class ClassifiedListItem extends Component {
  render() {
    console.log('props', this.props);
    const { title, price } = this.props;
    return (
      <p>{`${title} - $${price}`}</p>
      )
  }
}

export default ClassifiedListItem;