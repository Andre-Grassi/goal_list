import { useState } from 'react'
import AuthButtons from './AuthButtons'
import AuthForm from './AuthForm'

// Parent component of the overall authentication process
function Authentication(props) {
  const [auth, setAuth] = useState({
    action: null,
    isLoggedIn: false
  })

  const [userData, setUserData] = useState({ email: '', password: '' })

  function setAction(dispatchedAction) {
    if (dispatchedAction !== 'log-in' && dispatchedAction !== 'sign-up') {
      throw new Error('Invalid action')
    }

    // When user has initialized the authentication process, set the isAuthenticating in App.jsx to true
    props.onAuth(true)

    setAuth(prevState => ({
      ...prevState,
      action: dispatchedAction
    }))

    // I think this logs the previous state because it still has not re-rendered
    // console.log(auth)
  }

  return (
    <>
      {/* Only show the option to either log in or sign up if the user is not logged in and no action (log in or sign up) has been dispatched  */}
      {!auth.isLoggedIn && auth.action === null && (
        <AuthButtons dispatchAction={setAction} />
      )}

      {/* Only show the form to log in or register if the user is not logged in and if an action to log in or sign up has been dispatched */}
      {!auth.isLoggedIn && auth.action !== null && (
        <AuthForm auth={auth} onSubmit={setAuth} onAuth={props.onAuth} />
      )}
    </>
  )
}

export default Authentication
