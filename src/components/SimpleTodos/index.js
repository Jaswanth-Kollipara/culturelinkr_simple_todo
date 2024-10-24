import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const isNumeric = string => Number.isFinite(+string)

class SimpleTodos extends Component {
  state = {
    todosList: [],
    text: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onClickAdd = () => {
    const {text} = this.state
    const textArray = text.split(' ')
    if (isNumeric(textArray[textArray.length - 1])) {
      let updatedText = ''
      for (let i = 0; i < textArray.length - 1; i += 1) {
        updatedText += `${textArray[i]} `
      }
      const times = parseInt(textArray[textArray.length - 1])
      let val = []
      for (let i = 0; i < times; i += 1) {
        const val1 = {
          id: uuidv4(),
          title: updatedText,
          isChecked: false,
          isSaved: true,
        }
        val = [...val, val1]
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, ...val],
      }))
    } else {
      const val = {
        id: uuidv4(),
        title: text,
        isChecked: false,
        isSaved: true,
      }
      this.setState(prevState => ({todosList: [...prevState.todosList, val]}))
    }
  }

  changeChecked = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isChecked: !eachContact.isChecked}
        }
        return eachContact
      }),
    }))
  }

  changeSaved = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isSaved: !eachContact.isSaved}
        }
        return eachContact
      }),
    }))
  }

  changeTodoText = (text, id) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, title: text}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              className="simple-todos-input"
              onChange={this.onChangeInput}
            />
            <button type="button" onClick={this.onClickAdd}>
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                changeChecked={this.changeChecked}
                changeSaved={this.changeSaved}
                changeTodoText={this.changeTodoText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos