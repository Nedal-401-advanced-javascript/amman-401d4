// list some items, from an external API 
import React from 'react';
import superagent from 'superagent';

import { Route, Switch } from 'react-router-dom';

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
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/list">
                        <List check="hi">
                            {items}
                        </List>
                    </Route>
                    <Route exact path="/list/ahmad">
                        <div>This is /list/ahmad</div>
                    </Route>
                    <Route exact path="/list/ahmad/2">
                        <div>This is /list/ahmad/2 page </div>
                    </Route>
                    <Route exact path="/test">
                       <div>this is test route!</div>
                    </Route>
                    <Route exact path="/render-things" render={()=> <div>self closing Route</div>} />
                    <Route>404 Page Not Found!</Route>
                </Switch>
            </main>
        )
    }
}


export default Main;