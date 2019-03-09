import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
//import { ConnectedRouter } from 'react-router-redux';
////import { createBrowserHistory } from 'history';
//import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

// Create browser history to use in the Redux store
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
//const history = createBrowserHistory({ basename: baseUrl });

//// Get the application-wide store instance, prepopulating with state from the server where available.
//const initialState = window.initialReduxState;
//const store = configureStore(initialState);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger, reduxPromise())
    )
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    rootElement);

registerServiceWorker();
