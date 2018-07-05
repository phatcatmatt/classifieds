import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ClassifiedListItem from '../components/classified-list-item';

const ForSaleContainer = (props) => {

  return (
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
        
        return data.allListings.map(listing => <ClassifiedListItem key={listing.id} {...listing} />) 
      }}
    </Query>
  )
}

export default ForSaleContainer;
