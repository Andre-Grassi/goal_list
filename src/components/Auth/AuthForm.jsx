import { useState } from 'react'

// Formulary to log in or sign up
function AuthForm(props) {
  function submitAuthState(event) {
    event.preventDefault()

    // Submit info that the user has logged in
    props.onSubmit('is-logged-in')
  }

  const auth = props.auth
  //if (auth.action !== null) {
  return (
    <form>
      <input type="email" aria-label="email" placeholder="E-mail" />
      <input type="password" aria-label="password" placeholder="Password" />

      {/* If user wants to log in, then show the button to log in */}
      {auth.action === 'log-in' && (
        <button onClick={submitAuthState} type="submit">
          Log in
        </button>
      )}

      {/* If user wants to sign up, then show the button to sign up and another input to confirm the password */}
      {auth.action === 'sign-up' && (
        <>
          <button onClick={submitAuthState} type="submit">
            Sign up
          </button>
          <input
            type="password"
            aria-label="confirm password"
            placeholder="Confirm password"
          />
        </>
      )}
    </form>
  )
}

export default AuthForm
