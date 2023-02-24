import React from 'react'
import ListItem from '../../models/ListItem'

const GoalList: React.FC<{
  children: ListItem[] // Array of ListItems
  removeGoal: (e: number) => void
}> = ({ children: list, removeGoal }) => {
  return (
    <ul className="list-group text-center">
      {list.map(element => (
        <li
          onClick={() => removeGoal(element.key!)}
          id={element.key!.toString()}
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
