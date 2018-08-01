import React, { Component } from 'react';
import './App.css';
import Login from './Login'; 
import MainContainer from './MainContainer';
import GetNews from './GetNews';


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
          <p>{(this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>)}</p>
          <p><GetNews crimes={this.state.crimes} deleteCrime={this.deleteCrimes}/></p>

      </div>
    );
  }
}
export default App;
