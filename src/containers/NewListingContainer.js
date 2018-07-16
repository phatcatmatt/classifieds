import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import NewListingForm from '../components/NewListingForm';

const ADD_LISTING = gql`
  mutation createListing($title: String!, $price: Float!) {
    createListing(title: $title, price: $price) {
      id
      title
      price
    }
  }
`;

const NewListingContainer = (props) => {
  
  return (
    <Mutation
      mutation={ADD_LISTING}
    >
      {(addListing, { data }) => (
        <NewListingForm addListing={addListing}/>
      )}
    </Mutation>
  )
}

export default NewListingContainer;