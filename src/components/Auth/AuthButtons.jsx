function AuthButtons(props) {
  // function dispatchAction(action) {
  //   if (action === 'log-in')
  //     props.setAuth(prevState => ({ ...prevState, action: 'log-in' }))
  //   else if (action === 'sign-up')
  //     props.setAuth(prevState => ({ ...prevState, action: 'sign-up' }))
  //   else throw new Error('Invalid action')
  // }

  return (
    <nav className="d-flex justify-content-center gap-2 mt-3">
      {/* Button that sets the action of the auth state in Authentication.jsx to log-in*/}
      <button
        onClick={() => props.dispatchAction('log-in')}
        className="btn btn-light"
      >
        Log in
      </button>
      {/* Button that sets the action of the auth state in Authentication.jsx to sign-up*/}
      <button
        onClick={() => props.dispatchAction('sign-up')}
        className="btn btn-light"
      >
        Sign up
      </button>
    </nav>
  )
}

export default AuthButtons
