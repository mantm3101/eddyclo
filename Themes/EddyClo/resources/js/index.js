import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { StrictMode } from 'react';
import App from './App'


render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById('app')
);




