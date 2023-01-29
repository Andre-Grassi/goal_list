import AddGoal  from "./components/AddGoal";
import { useState } from "react";

function App() {
  // Array that contains the goals
  const [list, listHelper] = useState([])
  
  // Function that adds goals to the list
  function addGoal(title) {
    listHelper((prevState) => [...prevState, <li key={Math.round(Math.random()*1000)}>{title}</li>])
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
