import AddGoal  from "./components/AddGoal";
import { useState } from "react";

function App() {
  // Array that contains the goals
  const [list, listHelper] = useState([])

  // Array that contains the keys
  // let key = []
  const [key, keyHelper] = useState([])
  
  // Function that adds goals to the list
  function addGoal(title) {
    // key.push(Math.round(Math.random()*1000))
    keyHelper((prevState) => [...prevState, Math.round(Math.random()*1000)])
    /*
    Na real esse código ta sendo gerado sim na primeira passagem,
    mas como é assíncrono não da tempo do keyhelper gerar uma nova chave e
    o console.log já vai printando e acaba printando o estado anterior do keyhelper
    */
    console.log(key) 
    console.log(key.at(-1))
    // O primeiro item da lista ta sempre ficando sem id e acho que sem key também
    listHelper((prevState) => 
      [
        ...prevState,
        <li onClick={removeGoal} id={key.at(-1)} key={key.at(-1)} className="list-group-item">{title}</li>
      ])
  }

  function removeGoal(event) {
    const item = event.target
    // console.log(list[0].key)
    // console.log(item.id)
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].key, item.id)
      if (list[i].key == item.id)
      {
        list.splice(i, 1)
        listHelper(list)
      }
    }
  }
  
  return (
    <div className="App d-flex flex-column align-items-center">
      <header className="my-3">
        <h1 className='display-1 fw-bold'>Goal list</h1>
        <h2 className='h1'>achieve your goals.</h2>
      </header>
      <main className="d-flex flex-column align-items-center mt-3">
        <AddGoal submitGoal={addGoal}/> {/*submitGoal is used for passing data from child to parend */}
        <ul className="list-group">{list}</ul>
      </main>
    </div>
  );
}

export default App;
