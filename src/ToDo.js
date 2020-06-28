import React from "react"

function ToDo(props) {

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.todoItem.completed}
                onChange={() => props.handleChangenew(props.todoItem.id)} />
            <p>{props.todoItem.task}</p>
        </div>
    )
}

export default ToDo