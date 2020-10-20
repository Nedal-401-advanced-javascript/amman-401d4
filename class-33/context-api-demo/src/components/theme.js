import React from 'react';

import { ThemeContext } from '../context/theme.js';

class ThemeContent extends React.Component {

    // when using single context 
    static contextType = ThemeContext; // access it using this.context

    render() {
        return (
            <>
                <h2>Theme Settings</h2>
                <button onClick={this.context.toggleMode}>{this.context.mode}</button>
            </>
        )
    }
}

export default ThemeContent