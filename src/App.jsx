import AddGoal  from "./components/AddGoal";
import { useState } from "react";

function App() {
  // Array that contains the goals
  const [list, listHelper] = useState([])

  // Array that is used for different key values in the list
  let keyArr = []
  
  // Function that adds goals to the list
  function addGoal(title) {
    if (list.length >= 1) {
      console.log(keyArr.at(0))
      keyArr.push(keyArr.at(-1) + 1)
    }
    else {
      keyArr.push(0)
    } 
    
    console.log(keyArr)
    listHelper((prevState) => [...prevState, <li key={keyArr[keyArr.length - 1]}>{title}</li>])
  }
  
  return (
    <div className="App">
      <header>
        <h1 className='display-1'>Goal list</h1>
        <h2 className='h1'>achieve your goals.</h2>
      </header>
      <main>
        <AddGoal submitGoal={addGoal}/> {/*submitGoal is used for passing data from child to parend */}
        <ul>{list}</ul>
      </main>
    </div>
  );
}

export default App;
