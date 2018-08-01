import React, { Component } from 'react';
// import './App.css';
import Login from '../Login'; 
import MainContainer from '../MainContainer';


class GetNews extends Component {
  constructor(){
    super();

    this.state = {
      headlines: []
    }
  }
  
  newsApi = async () => {
  try {
    const news = await fetch('https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=61334f3965424d99afe5dad87ebd0b23');
    const newsJson = await news.json();
    return newsJson;
    console.log(newsJson, ' this is news');
  } catch(err) {
    return err
    console.log(err, ' error in catch block')
  }
}
componentDidMount(){
  this.newsApi().then((data) => {
    console.log(data, ' this is data')
    this.setState({headlines: data}) 
  })
}
  render() {   
    return (
      <div className="App">
          <p>{(this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>)}</p>
          
      </div>
    );
  }
}
export default GetNews;
