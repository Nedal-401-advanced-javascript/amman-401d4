import React from 'react';

class Form extends React.Component {
   
    // this.state
    // this.props

    _handleSubmit = async e => {
        e.preventDefault();
        
        // loader must show 
        this.props.toggleLoading();

        let raw = await fetch('https://swapi.dev/api/people/');
        let data = await raw.json();

        let count = data.count; 

        let people = data.results.reduce((list, person) => {
            list[person.name] = person.url;
            return list;
        }, {});


        // send people to the parent
        this.props.handler(count, people);
        this.props.toggleLoading();
    }
    
    render () {
        return (
            <form onSubmit={this._handleSubmit}>
                <button>{this.props.msg}</button>
            </form>
        )
    }
}

export default Form;