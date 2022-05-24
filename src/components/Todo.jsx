import React from 'react'
import { useState } from 'react'
import Todoinput from './Todoinput'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import { v4 as uuidv4 } from 'uuid';


const Todo = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        setTodos([...todos,{
            id: uuidv4(),
            value: text
        }]);
    }
    // const deleteTodo = (value)=>{
    //     setTodos(todos.filter((todo)=> todo.value != value))
    // } 
    // this deleteTodo is just for learning purposes
    return (
        <div>
            Todo App
            <Todoinput addTodo={addTodo}></Todoinput>
            <TodoList>
                    {todos.map((todo) => {
                        // return <li>{todo}</li> Here in this place we use the next line
                        return <TodoItems key={todo.id}  value={todo.value}></TodoItems>
                        // return <TodoItems key={todo.id}  value={todo.value} deleteTodo={deleteTodo}></TodoItems> for learning purposes
                    })}
            </TodoList>
        </div>
    )
}

export default Todo
