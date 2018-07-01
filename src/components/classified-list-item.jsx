import React, { Component } from 'react';
// apollo/graphql
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// UI
import './classified-list-item.css';

const ListItem = () => (
  <Query
    query={gql`
      {
        allListings{
          title
          price
          id
        }
      }
    `}
  >
    {({loading, error, data}) => {
      if (loading) return <p>loading...</p>;
      if (error) return <p>error loading listings</p>

      return data.allListings.map(({title, price, id}) => (
        <div key={id}>
          <p>{`${title} - $${price}`}</p>
        </div>
      ))
    }}
  </Query>
)

class ClassifiedListItem extends Component {
  render() {
    return (
      <ListItem/>
    )
  }
}

export default ClassifiedListItem;