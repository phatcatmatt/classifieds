import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import config from './config';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: config.listingsAPI,
})


client.query({
  query: gql`
    {
      allListings {
        title
        price
        category
      }
    }
  `
})
.then(res => console.log('api res', res));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
