import React from 'react'

function BasicAuth(props) {
  let {children, role, AuthRoles, notMatch} = props;
  if (!AuthRoles) return children
  if (Array.isArray(AuthRoles) && AuthRoles.includes(role)) {
    return children
  }
  return notMatch || null
}

export default BasicAuth