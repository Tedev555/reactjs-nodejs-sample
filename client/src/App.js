import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    respone: '',
    test: 'hello'
  }

  componentDidMount() {
    this.callApi().then(res => this.setState({ respone: res.express}))
    .catch(err => console.log(err))
  }

  callApi = async () => {
    const respone = await fetch('/api/hello')
    const body = await respone.json()

    if (respone.status !== 200) throw Error(body.message)

    return body
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.respone}
        </p>
      </div>
    );
  }
}

export default App;
