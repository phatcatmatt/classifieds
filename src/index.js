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

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)


ReactDOM.render(<ApolloApp />, document.getElementById('root'));
registerServiceWorker();
