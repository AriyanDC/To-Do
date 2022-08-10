import { useState } from "react";
import Item from "./Item"
import Form from "./Form";
import {v4 as uuidv4 } from "uuid"
// import React from "react";

function Items() {

    const [todos, setTodos] = useState([]);

    function addTodo(name) {
        let newTodo = { key:uuidv4(), name: name, completed: false }
        
        setTodos([...todos, newTodo])
    }

    const markComplete = id => {
        setTodos(
            todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const delTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <>
            
            
            <Form
                addTodo={addTodo}
            />
            {todos.map(todo => {
                return (
                    <>
                    <Item
                        key={todo.key}
                        name={todo.name}
                        completed={todo.completed}
                        markComplete={markComplete}
                        delTodo={delTodo}
                    />
                    <br />
                    </>
                )
                
            })}
        </>
    )
}

export default Items;