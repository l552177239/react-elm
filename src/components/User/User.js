import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

class User extends React.Component {
  render(){
    return(
      <div className="user">
        <div className='user-section'>
          <Link to='/login'>登录</Link>/<Link to='/signup'>注册</Link>
          <div>
            User
          </div>
        </div>
      </div>
    )
  }
}

export default User
