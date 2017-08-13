import React from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './components/Home/Home'
import User from './components/User/User'
import Order from './components/Order/Order'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import TitleHeader from './components/TitleHeader/TitleHeader'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className="app">
          <div className="header">
            <TitleHeader />
          </div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/user' component={User}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/Signup' component={Signup}></Route>
            <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
