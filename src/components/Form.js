import { useState } from "react";

function Form( props ) {

    const [title, setTitle] = useState("");

    const onSubmit = evt =>  {
        evt.preventDefault();

        console.log(props.addTodo)

        props.addTodo(title)

        setTitle("")
    }


    return (
        <>
            
      <form onSubmit={onSubmit}>
        <input
          name="task-title"
          type="text"
          placeholder="Add task..."
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          data-testid="task-input-field"
        />
        <button
            type="submit"
            data-testid="task-submit-btn">
        Add
        </button>
      </form>
        </>
    )
}

export default Form;