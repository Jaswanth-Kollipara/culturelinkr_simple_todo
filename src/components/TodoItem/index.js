import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    deleteTodo,
    changeChecked,
    changeSaved,
    changeTodoText,
  } = props
  const {id, title, isChecked, isSaved} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onClickChecked = () => {
    changeChecked(id)
  }

  const onEditTodo = () => {
    changeSaved(id)
  }

  const onChangeTodoText = event => {
    changeTodoText(event.target.value, id)
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={isChecked} onClick={onClickChecked} />
      {isSaved && (
        <>
          <p className="title">{title}</p>
          <button type="button" className="edit-btn" onClick={onEditTodo}>
            Edit
          </button>
          <button type="button" className="delete-btn" onClick={onDeleteTodo}>
            Delete
          </button>
        </>
      )}
      {!isSaved && (
        <>
          <input className="title" value={title} onChange={onChangeTodoText} />
          <button type="button" className="save-btn" onClick={onEditTodo}>
            Save
          </button>
          <button type="button" className="delete-btn" onClick={onDeleteTodo}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem