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
      isVisible: false,
      input: '',
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

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(this.state.input);
  }



  render() {
    const { isSignedIn, route } = this.state;
    return(
      <div className="App">
          { (route === 'home')
              ?<Layout onRouteChange={this.onRouteChange} route={route} onInputChange={this.onInputChange} />
              :<Landing isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          }
      </div>
      )
  }
}

export default App;
