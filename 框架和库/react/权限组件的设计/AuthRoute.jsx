import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import BasicAuth from './BasicAuth';

function AuthRoute({ AuthRoles, role, redirectPath, ...rest}) {
  return (
    <BasicAuth
      AuthRoles={AuthRoles}
      role={role}
      notMatch={<Route render={() => <Redirect to={redirectPath} />} />}
    >
      <Route {...rest} />
    </BasicAuth>
  )
}

export default AuthRoute