import React, { useState, useEffect } from 'react'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import ListItem from '../../models/ListItem'

const Goals = () => {
  // Adition of goals:

  // Array that contains the goals. Each goal is an object with 'title' and 'key' properties
  const [list, setList] = useState<ListItem[]>([{ key: 0, title: '' }])
  // I don't know exactly why the default value of ListItem doesn't appear automatically in the list in the app. !!!

  // ATENÇÃO O USE EFFECT NÃO É ASSÍNCRONO, então o useeffect que faz o get acontece antes do que faz o set quando o App é montado, evitando a situação de fazer um set sem antes recuperar a possível lista guardada
  // Components mounts twice in development build because of <React.StrictMode> in index.js. So to avoid unwanted behaviours while using useEffect, I removed that tag.
  // Get stored list if there is any element in the local storage
  useEffect(() => {
    // Get the stored list
    const listStorage = localStorage.getItem('list')

    // Check if the list is empty
    if (listStorage !== null) {
      // Parse the stored list into a const
      const storedList = JSON.parse(listStorage)

      // Update the state of the list
      setList(storedList)
    }
  }, [])

  // Save the list to local storage in form of a JSON object every time that the list changes
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // Function that adds goals to the list
  function addGoal(newTitle: string) {
    setList(prevState => {
      return [...prevState, new ListItem(1000, newTitle)]
    })
  }

  function removeGoal(currKey: number) {
    // Filter method returns a new array with only the elements that passed the test provided in the argument
    setList(list.filter((item: ListItem) => item.key !== currKey))
  }

  return (
    <>
      {/*submitGoal is used for passing data from child to parent */}
      <AddGoal submitGoal={addGoal} />
      <GoalList removeGoal={removeGoal}>{list}</GoalList>
    </>
  )
}

export default Goals
