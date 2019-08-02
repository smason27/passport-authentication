import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BizProfile from './components/BizProfile'
import './components/Navbar/index'
import './App.css';
import Home from "./components/home/home"
import Navbar from './components/Navbar/index'
import Main from './components/Main'
// import Profile from './components/ProfilePage/profile'
// import Cards from './components/Cards/cards'
// import SignUpModal from './components/Sign-up';

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar></Navbar>
        {/* <SignUpModal></SignUpModal> */}
        <Home></Home>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route path='/profile' components={Profile} /> */}
          <Route exact path='/newProfile' component={BizProfile} />
          {/* <Route path='/' component={Cards} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
