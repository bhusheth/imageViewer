import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/rootStore';

const rootstore = configureStore();

ReactDOM.render(
    <Provider store={rootstore}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
