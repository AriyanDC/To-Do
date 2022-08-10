import React from "react";

function Item(props) {
    return (
        <li>
      <input
        name="completed-checkbox"
        type="checkbox"
        checked={props.completed}
        value={props.completed}
        onChange={() => props.markComplete(props.id)}
        data-testid="task-completed-checkbox"
      />
      <span>
        {props.name}
      </span>
      <button
        onClick={() => props.delTodo(props.id)}
      >
        🗑
      </button>
    </li>
    )
}

export default Item