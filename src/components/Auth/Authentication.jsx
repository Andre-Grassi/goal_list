import { useState, useReducer, useEffect } from 'react'
import AuthButtons from './AuthButtons'
import AuthForm from './AuthForm'

// Reducer function for auth
function authReducer(prevState, action) {
  // Check if user has been logged in
  if (action === 'is-logged-in') {
    // props.onAuth(false) --> Cannot update a component (`App`) while rendering a different component (`Authentication`)
    // User has terminated the authentication process, so he is logged in (isLoggedIn is true) and is not in the authenticating process anymore (isAuthenticating is false)
    return { ...prevState, isLoggedIn: true, isAuthenticating: false }
  } else if (action !== 'log-in' && action !== 'sign-up') {
    throw new Error('Invalid action')
  }

  // props.onAuth(true) --> Cannot update a component (`App`) while rendering a different component (`Authentication`)

  // User has initialized the authentication process (isAuthenticating is true) and he is still not logged in (isLoggedIn still is false)
  return {
    ...prevState,
    action: action,
    isAuthenticating: true
  }
}

// Parent component of the overall authentication process
function Authentication(props) {
  const [userData, setUserData] = useState({ email: '', password: '' })

  // State that manages the authentication process
  const [auth, authDispatch] = useReducer(authReducer, {
    action: null,
    isLoggedIn: false,
    isAuthenticating: false
  })

  // Update isAuthenticating and isAuthenticated state in App component (parent of this one) when the auth state is updated
  useEffect(() => {
    props.setIsAuthenticating(auth.isAuthenticating)
    props.setIsAuthenticated(auth.isLoggedIn)
  }, [auth])

  return (
    <>
      {/* Only show the option to either log in or sign up if the user is not logged in and NO action (log in or sign up) has been dispatched  */}
      {!auth.isLoggedIn && auth.action === null && (
        <AuthButtons dispatchAction={authDispatch} />
      )}

      {/* Only show the form to log in or register if the user is not logged in and if an action to log in or sign up HAS been dispatched */}
      {!auth.isLoggedIn && auth.action !== null && (
        <AuthForm auth={auth} onSubmit={authDispatch} onAuth={props.onAuth} />
      )}
    </>
  )
}

export default Authentication
