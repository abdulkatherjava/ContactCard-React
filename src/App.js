import React, { Component } from "react"
import ToDo from "./ToDo"
import toDoData from "./toDoData"
import styles from "./style.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: toDoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log(id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          /**
           * The below way of doing modification is completly wrong 
           * because it's also changed the previous state. We should take a copy of that object and have to return
           */
          // todo.completed = !todo.completed
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
      console.log("todo object - before update", prevState.todos)
      console.log("todo object - after update", updatedTodos)
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoListComponent = this.state.todos.map(item => <ToDo key={item.id} todoItem={item}
      handleChangenew={this.handleChange} />)
    return (
      <div className="todo-list">
        <h1 style={{color:"#A52004", fontweight:"bold"}}>My ToDo List </h1>
        {todoListComponent}
      </div>

    )
  }
}
export default App;