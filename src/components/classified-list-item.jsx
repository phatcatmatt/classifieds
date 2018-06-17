import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './classified-list-item.css';

class ClassifiedListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <h1>Post Title</h1>
        <h2>$price</h2>
        <h3>Location of Item</h3>
        <h3>Item category</h3>
        {/* example button from ant design*/}
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default ClassifiedListItem;