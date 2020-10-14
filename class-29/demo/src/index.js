import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app.js';
import './styles.scss';

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}

const rootEl = document.getElementById("root");
ReactDOM.render(<Main />, rootEl);