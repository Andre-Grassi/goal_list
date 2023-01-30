import {useState} from 'react'

function AddGoal(props) {
  // Variable that contains the title of the goal being added
  const [goalTitle, goalTitleHelper] = useState('')

  // Function that gets the title of the goal being written in the input
  function getGoal(input) {
    // The input is an object, and its value can be accessed via input.targe.value
    const title = input.target.value
    goalTitleHelper(title)
  }

  // Function that will submit the title to the App component so it can be added to list
  function submit(event) {
    // Prevents the default action of reloading the page when clicking in a button of a form
    event.preventDefault()
    props.submitGoal(goalTitle)
  }

  return(
    <form className='d-flex gap-3 mb-3'>
      <input onChange={getGoal} type="text" aria-label="Add goal" placeholder='Write a goal' className="form-control px-2"/>
      <button onClick={submit} type="submit" className="btn bg-primary-subtle px-3">Submit</button>
    </form>
  )
}

export default AddGoal