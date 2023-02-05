import AddGoal from './components/AddGoal'
import { useState } from 'react'

function App() {
  // Array that contains the goals
  const [list, setList] = useState({
    item: [],
    key: [0]
  })

  // Function that adds goals to the list
  function addGoal(title) {
    setList(prevState => {
      return {
        // Known bug: if the key property is not initialized with 0, then the first item won't have neither id nor key
        key: [...prevState.key, Math.round(Math.random() * 1000)],
        item: [
          ...prevState.item,
          <li
            onClick={removeGoal}
            id={list.key[list.key.length - 1]}
            key={list.key[list.key.length - 1]}
            className="list-group-item"
          >
            {title}
          </li>
        ]
      }
    })
  }

  function removeGoal(event) {
    const item = event.target
    // console.log(list[0].key)
    // console.log(item.id)
    /*
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].key, item.id)
      if (list[i].key == item.id) {
        list.splice(i, 1)
        listHelper(list)
      }
    }
    */
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <header className="my-3">
        <h1 className="display-1 fw-bold">Goal list</h1>
        <h2 className="h1">achieve your goals.</h2>
      </header>
      <main className="d-flex flex-column align-items-center mt-3">
        {/*submitGoal is used for passing data from child to parend */}
        <AddGoal submitGoal={addGoal} />
        <ul className="list-group">{list.item}</ul>
      </main>
    </div>
  )
}

export default App
