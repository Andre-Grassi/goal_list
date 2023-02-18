import { useState } from 'react'

import Goals from './components/UI/Goals'
import Authentication from './components/Auth/Authentication'

function App() {
  // Authentication:
  // State that manages wheter the user is authenticating or not
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  // State that manages wheter the user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Function to uptade the state of isAuthenticating programatically
  function isAuthenticatingHandler(authenticating) {
    setIsAuthenticating(authenticating)
  }

  function isAuthenticatedHandler(authenticated) {
    setIsAuthenticated(authenticated)
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <header className="my-3 text-center">
        <h1 className="display-1 fw-bold">Goal list</h1>
        <h2 className="h1">achieve your goals.</h2>
        {!isAuthenticated && (
          // Use portal for Authentication component
          <Authentication
            setIsAuthenticating={isAuthenticatingHandler}
            setIsAuthenticated={isAuthenticatedHandler}
          />
        )}
      </header>

      <main className="d-flex flex-column align-items-center mt-3">
        {/* Only show the list if the user is not trying to authenticate */}
        {!isAuthenticating && <Goals />}
      </main>
    </div>
  )
}

export default App
