import { useState } from 'react'

function AddGoal(props) {
  // Variable that contains the title of the goal being added
  const [newTitle, setNewTitle] = useState('')

  // Variable that controls whether the input field is empty or not when trying to submit
  const [submitEmpty, setSubmitEmpty] = useState(false)

  // Function that gets the title of the goal being written in the input
  function getTitle(input) {
    // The input is an object, and its value can be accessed via input.targe.value
    const title = input.target.value
    setNewTitle(title)
  }

  // Function that will submit the title to the App component so it can be added to list
  function submit(event) {
    // Prevents the default action of reloading the page when clicking in a button of a form
    event.preventDefault()

    // Doesn't submit if the input field is empty and turns the border and the field red
    if (newTitle === '') {
      setSubmitEmpty(true)
      return
    }
    // If subtmitting again and the input field is NOT empty, then the input field turns back to normal
    else if (submitEmpty === true) {
      setSubmitEmpty(false)
    }

    // Submit new goal to the function of the parent component
    props.submitGoal(newTitle)

    // Clear the input field
    setNewTitle('')
  }

  return (
    <form className="d-flex gap-3 mb-3">
      <input
        onChange={getTitle}
        value={newTitle}
        type="text"
        aria-label="Write a goal"
        placeholder="Write a goal"
        className={`form-control px-2 
        ${
          // Change the color of the border if input field is empty and user is trying to submit
          submitEmpty ? 'border border-danger border-2 bg-danger-subtle' : ''
        }`}
      />
      <button
        onClick={submit}
        type="submit"
        className="btn bg-primary-subtle px-3"
      >
        Submit
      </button>
    </form>
  )
}

export default AddGoal
