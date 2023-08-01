import React from 'react'

const Login = ({setLoggedIn}) => {
  return (
    <>
    <h1>Please Login to post blogs!</h1>
    <button onClick={e=> setLoggedIn(true)}>Login</button>
    </>
  )
}

export default Login