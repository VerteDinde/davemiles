import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { message: '' }
  }

  componentDidMount() {
    fetch('/api/message')
    .then(response => response.json())
    .then(json => this.setState({ message: json }));
  }

  const onSubmit= () => {
    //TODO: Refine query
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <header>
          <h1>Dave Miles</h1>
          <section className="nav">
            <p>About Dave Miles</p>
          </section>
        </header>
          <main>
            <h2>How many miles are you actually hiking today?</h2>
            <h3>Dave Says:</h3>
            <form action="#" onSubmit="">
              <input type="text" />
            </form>
            <div id="feedback"></div>
        </main>
        <footer>
          <p>Dave Rappoccio | 2017</p>
        </footer>
      </div>
    );
  }
}

export default App;
