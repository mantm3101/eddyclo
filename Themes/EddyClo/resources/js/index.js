import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import navigator from './navigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/reducer';
import App from "./App";


console.log("Hello from Index");

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
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




