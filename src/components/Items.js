import { useState } from "react";
import Item from "./Item"
import {v4 as uuidv4 } from "uuid"
// import React from "react";

function Items() {

    const [todos, setTodos] = useState([]);

    function addTodo(name) {
        let newTodo = { id:uuidv4(), name: name, completed: false }
        
        setTodos([...todos, newTodo])
    }
    

    return (
        <>
            {todos.map((todo) => (
                <Item
                    key={todo.id}
                    todo={todo.name}
                    completed={todo.completed}
                />
                
            ))}
        </>
    )
}

export default Items;