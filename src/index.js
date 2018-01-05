import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'
// import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {history} from './store'

import { Provider } from 'react-redux'
import store from './store'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

// const networkInterface = createNetworkInterface({
//   // uri: 'https://listen-log.leefreeman.xyz/graphql'
//   uri: 'http://localhost:3001/graphql'
// });


const client = new ApolloClient({
  link: new HttpLink({uri: 'https://listen-log.leefreeman.xyz/graphql'}),
  cache: new InMemoryCache()
});

// injectTapEventPlugin()


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
