import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import config from './config';

const client = new ApolloClient({
  uri: config.listingsAPI,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'));

registerServiceWorker();
