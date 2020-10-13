// list some items, from an external API 
import React from 'react';
import superagent from 'superagent';

import List from './list';
import HomePage from './home-page.js'

class Main extends React.Component {
    constructor(props) {
        console.log("constuctor!!! ")

        super(props);
        this.state = {
            items: [
                {name: 'habrawi'}
            ],
        }
    }

    // component lifecycle method
    async componentDidMount() {
        console.log("componentDidMount !!!! ")
        // get items form pokemon API
        let response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
        this.setState({items: response.body.results});
    }

    render() {
        console.log("render !!!! ")
        let items = this.state.items.map((item, i)=> <li key={i} >{item.name}</li>)
        return (
            <main>
                <HomePage/>
                <List check="hi">
                    {items}
                </List>
            </main>
        )
    }
}


export default Main;