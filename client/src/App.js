import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ApiFetch extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <h1>Static Text</h1>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ApiFetch/>
      </div>
    );
  }
}

export default App;
