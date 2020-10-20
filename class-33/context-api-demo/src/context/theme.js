// Dark or Light Mode 

import React from 'react';

// Create Context for theme: it will have mode (Dark/Light), toggleMode
export const ThemeContext = React.createContext();


// ThemeContext.Provider 

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'dark',
            toggleMode: this.toggleMode
        }
    }

    toggleMode = () => this.setState({mode : this.state.mode == 'dark' ? 'light' : 'dark'});

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
      
    }

}

export default ThemeProvider;