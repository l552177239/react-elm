import React from 'react'
import Home from './components/Home/Home'
import User from './components/User/User'
import Order from './components/Order/Order'

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Home />
        <User />
        <Order />
      </div>
    )
  }
}

export default App
