import AddGoal from './components/AddGoal'
import { useState } from 'react'

function generateKey(decimals) {
  return Math.round(Math.random() * decimals)
}

function App() {
  // Array that contains the goals. Each goal is an object with 'title' and 'key' properties
  const [list, setList] = useState([])

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

  return (
    <div className="App d-flex flex-column align-items-center">
      <header className="my-3 text-center">
        <h1 className="display-1 fw-bold">Goal list</h1>
        <h2 className="h1">achieve your goals.</h2>
      </header>
      <main className="d-flex flex-column align-items-center mt-3">
        {/*submitGoal is used for passing data from child to parend */}
        <AddGoal submitGoal={addGoal} />
        <ul className="list-group">
          {list.map(element => (
            <li
              onClick={() => removeGoal(element.key)}
              id={element.key}
              key={element.key}
              className="list-group-item"
            >
              {element.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
