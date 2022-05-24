import React, { Children } from 'react'

const TodoList = ({children}) => {
    
  return (
    <ul>
        {children}
    </ul>
  )
}
export default TodoList