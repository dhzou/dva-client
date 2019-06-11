import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { isAuthenticated ,wechatAuth} from '../utils/session'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )}/>
)

export default PrivateRoute