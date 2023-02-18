function GoalList({ children: list, removeGoal }) {
  return (
    <ul className="list-group text-center">
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
  )
}

export default GoalList
