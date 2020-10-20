import React from 'react';

import Main from './main';

import ThemeContext from './context/theme.js';
import SiteContext from './context/site.js';

import './app.scss';

export default class App extends React.Component {
    render() {
        return (
            <ThemeContext>
                <SiteContext>
                    <Main />
                </SiteContext>
            </ThemeContext>
        )

    }
}