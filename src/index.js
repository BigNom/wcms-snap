import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import store from './store'

const Wrapper = () => {
  return(<MuiThemeProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </MuiThemeProvider>)
}

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Wrapper />, rootElement);
} else { render(<Wrapper />, rootElement);
}

registerServiceWorker();
