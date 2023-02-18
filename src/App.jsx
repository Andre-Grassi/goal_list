import AddGoal from './components/AddGoal'
import GoalList from './components/GoalList'
import Authentication from './components/Auth/Authentication'
import { useState, useEffect } from 'react'
import generateKey from './helpers/generateKey'

function App() {
  // Adition of goals:

  // Array that contains the goals. Each goal is an object with 'title' and 'key' properties
  const [list, setList] = useState([])

  // ATENÇÃO O USE EFFECT NÃO É ASSÍNCRONO, então o useeffect que faz o get acontece antes do que faz o set quando o App é montado, evitando a situação de fazer um set sem antes recuperar a possível lista guardada
  // Components mounts twice in development build because of <React.StrictMode> in index.js. So to avoid unwanted behaviours while using useEffect, I removed that tag.
  // Get stored list if there is any element in the local storage
  useEffect(() => {
    // Get the stored list
    const listStorage = localStorage.getItem('list')

    // Check if the list is empty
    if (listStorage !== null) {
      // Parse the stored list into a const
      const storedList = JSON.parse(listStorage)

      // Update the state of the list
      setList(storedList)
    }
  }, [])

  // Save the list to local storage in form of a JSON object every time that the list changes
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // Function that adds goals to the list
  function addGoal(newTitle) {
    setList(prevState => {
      return [
        ...prevState,
        {
          key: generateKey(1000),
          title: newTitle
        }
      ]
    })
  }

  function removeGoal(currKey) {
    // Filter method returns a new array with only the elements that passed the test provided in the argument
    setList(list.filter(item => item.key !== currKey))
  }

  //////////////////////////////////////////////////////////

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
        {!isAuthenticating && (
          <>
            {/*submitGoal is used for passing data from child to parent */}
            <AddGoal submitGoal={addGoal} />
            <GoalList removeGoal={removeGoal}>{list}</GoalList>
          </>
        )}
      </main>
    </div>
  )
}

export default App
