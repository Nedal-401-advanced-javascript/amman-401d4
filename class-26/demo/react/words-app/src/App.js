import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>React Demo!!!</h1>
    </header>
  )
};

const Footer = () => <footer>&copy 2020 401d4</footer>

//Main
class Main extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      words: 'Initial State'
    }
  }

  // methods inside of class
  handleClick = e => {
    let words = this.state.words.split('').reverse().join('');
    // update state.words
    this.setState({words}); // re-render 
  }

  handleInput = e => {
    // update state.words
    let words = e.target.value;
    this.setState({words}); // re-render 
  }

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleInput}/>
        <button onClick={this.handleClick}>Reverse</button>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App;