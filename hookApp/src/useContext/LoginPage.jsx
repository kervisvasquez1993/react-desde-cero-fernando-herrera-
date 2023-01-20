import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/Usercontext'

const LoginPage = () => {
  const algo = useContext(UserContext)
  console.log(algo,"algo")
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage