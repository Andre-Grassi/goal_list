import AddGoal  from "./components/AddGoal";
import { useState } from "react";

function App() {
  // Array that contains the goals
  const [list, listHelper] = useState([])
  
  // Function that adds goals to the list
  function addGoal(title) {
    listHelper((prevState) => 
      [
        ...prevState,
        <li key={Math.round(Math.random()*1000)} className="list-group-item">{title}</li>
      ])
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
