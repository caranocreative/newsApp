import React, { Component } from 'react';
import './App.css';
import Login from './Login'; 
import MainContainer from './MainContainer';


class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    console.log('login function in app is working', username);
    console.log(this.state, ' inside of app component');

    this.setState({
      username: username,
      logged: true
    });
  }
  render() {   
    return (
      <div className="App">
          {(this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>)}
      </div>
    );
  }
}
export default App;
