import React from 'react';

import Form from './form.js';
import People from './people.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            count: 0,
            results: []
        };
    }

    toggleLoading = () => {
        this.setState({loading: !this.state.loading})
    }

    updateHandler = (count, results) => {
        this.setState({count, results});
    }

    render() {
        return (
            <>
                <Form msg="Get me Startwars people!!" toggleLoading={this.toggleLoading} handler={this.updateHandler}  />
                <People loading={this.state.loading} people={this.state.results} />
            </>
        )
    }
}

export default App;