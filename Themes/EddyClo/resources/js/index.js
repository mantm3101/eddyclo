import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import App from './pages/Test/App';
import navigator from './navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

let store = createStore(reducer);

render(
    <StrictMode>
        <Provider store={store}>
            <Router history={navigator}>
                <App />
            </Router>
        </Provider>
    </StrictMode>, document.getElementById('app')
);




