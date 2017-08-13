import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './footer.css'
import Cart from '../Cart/Cart'

class Footer extends React.Component {
  render(){
    let { pathname } = this.props.location
    return(
      <div className="footer">
        { pathname==='/order' ? <Cart /> :
          <div className='foot-link'>
            <Link to='/'>首页</Link>
            <Link to='/order'>订单</Link>
            <Link to='/user'>我的</Link>
          </div>
      }
      </div>
    )
  }
}

export default withRouter(Footer)
