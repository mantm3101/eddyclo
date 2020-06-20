import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import navigator from './navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import App from "./App";

let store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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




