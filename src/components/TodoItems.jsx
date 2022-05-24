import React from 'react'
import styles from "./app.module.css"

const TodoItems = ({value,deleteTodo}) => {
  return (
    <li className={styles.todo}>
      <input type="radio" />
      <div className={styles.todov}>
        {value}
        {/* <button onClick={()=>deleteTodo(value)}>delete</button> */}
      </div>
     
    </li>
  )
}
export default TodoItems
