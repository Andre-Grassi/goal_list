function AuthButton(props) {
  // function dispatchAction(action) {
  //   if (action === 'log-in')
  //     props.setAuth(prevState => ({ ...prevState, action: 'log-in' }))
  //   else if (action === 'sign-up')
  //     props.setAuth(prevState => ({ ...prevState, action: 'sign-up' }))
  //   else throw new Error('Invalid action')
  // }

  return (
    <>
      {/* Button that sets the action of the auth state in Authentication.jsx to log-in*/}
      <button
        type={props.type}
        onClick={() => props.dispatchAction(props.action)}
        className="btn btn-light"
      >
        {props.children}
      </button>
    </>
  )
}

export default AuthButton
