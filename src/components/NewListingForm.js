import React, { Component } from 'react';

class NewListingForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
    }
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }
  
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  render () {
    const { addListing } = this.props;

    return (
      <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addListing({ variables: { title: this.state.title, price: parseInt(this.state.price)}})
            }}
          >
            <label htmlFor="titleInput">Title:</label>
            <input
              onChange={e => this.handleTitleChange(e)}
              value={this.state.title}
            />
  
            <label htmlFor="priceInput">Price:</label>
            <input
              onChange={e => this.handlePriceChange(e)}
              value={this.state.price}
            />
            <button type="submit"> add clams </button>
          </form>
  
        </div>
    )
  }
}

export default NewListingForm;