import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import muiTheme from './assets/styles/theme'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://listen-log.leefreeman.xyz/graphql'
  // uri: 'http://localhost:3000/graphql'
});
const client = new ApolloClient({
  networkInterface: networkInterface
});

injectTapEventPlugin()


ReactDOM.render(
    <ApolloProvider client={client}>
      <MuiThemeProvider muiTheme={muiTheme}>
      <App />
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
