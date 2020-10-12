import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    // add a method that would be responsible for updating my number
    handleUpdate = (number) => {
        console.log("passed number from child to parent >>>> ", number)
        this.setState({number});
    }

    render() {
        // other componets
        return (
            <>
                <Number show={this.state.number} />
                <NumberForm updateNumber={this.handleUpdate}  />
            </>
           
        )
    }
}

function Number(props) {
    return (
        <h1> Number child :  {props.show}</h1>
    )
}

function NumberForm(props) {

    const _handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const _handleChange = (e) => {
        // update props
        props.updateNumber(e.target.value);
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>NumberForm child</label>
            <input type="number" onChange={_handleChange} />
        </form>
    )
}


export default App;