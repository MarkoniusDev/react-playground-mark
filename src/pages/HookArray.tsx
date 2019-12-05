import React, {  useState } from 'react';
import { useArray } from 'react-hanger';

const HookArray = () => {
  // const todos = useArray(['hi there', 'sup', 'world'])
  const [todos, setTodos] = useState(['hi there', 'sup', 'world']);
  const [fakeCounter, setFakeCounter] = useState(1);

  const deleteTask = (taskToDelete: string) => {
    const newList = todos;
    const index = todos.findIndex(task => task === taskToDelete);

    newList.splice(index, 1);

    setTodos(newList);
    setFakeCounter(fakeCounter+1);
  }

  return(
    <main className='Page'>
      <h1>HookArray</h1>
      { todos.map((task: any, key: any) => (
        <li key={key}>{task} <button onClick={() => {deleteTask(task)}}>Supprimer</button></li>
      ))}
    </main>
  );
}

export default HookArray;
