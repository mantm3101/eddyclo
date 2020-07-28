import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import navigator from './navigator';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from './store/reducer';
import App from "./App";

const loggerMiddleware = createLogger()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

render(
    <StrictMode>
        <Provider store={store}>
            <Router history={navigator}>
                <App />
            </Router>
        </Provider>
    </StrictMode>, document.getElementById('app')
);




