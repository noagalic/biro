import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Landing from './Components/Landing/Landing';
import Layout from './Components/Layout/Layout';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isSignedIn: false, //Kasnije za backend
      route: 'signin', //Routes, sad koristi router
    }
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render() {
    const { isSignedIn, route } = this.state;
    return(
      <div className="App">
          { route === 'home'
              ? <Layout onRouteChange={this.onRouteChange} />
              : <Landing isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          }
      </div>
      )
  }
}

export default App;
