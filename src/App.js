import React, { Component } from 'react';
import Miles from './components/Miles';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
    .then(response => response.json())
    .then(json => this.setState({ message: json }));
  }

  onSubmit = () => {
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
        <Miles />
        <footer>
          <p>Dave Rappoccio | 2017</p>
        </footer>
      </div>
    );
  }
}

export default App;
