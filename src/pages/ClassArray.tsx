import React from 'react';

type State = {
  todoList: any[]
}

export default class ClassArray extends React.Component<{},State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          name: 'Manger des pâtes'
        },
        {
          id: 2,
          name: 'Claquer sa thune au bar'
        },
        {
          id: 3,
          name: 'Aller à la foire'
        },
      ]
    }
  }

  deleteTask = (id: number) => {
    const newList = this.state.todoList;
    const index = newList.findIndex((task: any) => task.id === id);
    newList.splice(index, 1);
    this.setState({
      todoList: newList
    });
  }

  render() {
    return(
      <main className="Page">
        <h1>ClassArray</h1>
        { this.state.todoList.map((task: any, key: any) => (
          <li key={key}>{task.name} <button onClick={() => {this.deleteTask(task.id)}}>Supprimer</button></li>
        ))}
      </main>
    )
  }
}