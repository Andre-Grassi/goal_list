import AddGoal from './components/AddGoal'
import { useState } from 'react'

function generateKey(decimals) {
  return Math.round(Math.random() * decimals)
}

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
        // Known bug: if the key property is not initialized with 0, then the first item won't have neither id nor key, because the key generated here can't be used until the next rendeing
        key: [...prevState.key, generateKey(1000)],
        item: [
          ...prevState.item,
          <li
            onClick={event => removeGoal(event, list.item.length - 1)}
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

  function removeGoal(event, currKey) {
    const element = event.target
    console.log('id: ', element.id)
    // console.log(list.item[0])
    console.log('item: ', list.item[currKey])
    /*
    for (let i = 0; i < list.item.length; i++) {
      console.log(`${list.item[i].key} and ${element.id}`)
      if (list.item[i].key === element.id) console.log(list.item[i].key)
    }
    */
    /*
   const indexItem = list.item.indexOf(item)
   list.key.splice(index, 1)
   list.item.splice(index, 1)
   */
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
        <ul className="list-group">{list.item}</ul>
      </main>
    </div>
  )
}

export default App
