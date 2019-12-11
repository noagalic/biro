import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Landing from './Components/Landing/Landing';
import Layout from './Components/Layout/Layout';

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      posts: [],
      isVisible: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts: posts }));
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.input);
  }

  render() {
    return(
      <div className = "App">
        <Layout onInputChange={this.onInputChange} postLoad = {this.state.posts} isVisible={this.state.isVisible}/>
      </div>
    )
  }
}

export default App;


/*(route === 'home') //Problem je u ovom if statementu za routove, popravi to!!!
            ?<Layout onRouteChange={this.onRouteChange} route={route} onInputChange={this.onInputChange} />
            :<Landing isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />*/