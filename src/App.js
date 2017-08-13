import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
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
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
