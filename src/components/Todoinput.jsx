import React from 'react';
import { useState } from 'react';
import styles from "./app.module.css"

 const Todoinput = ({addTodo}) => {
     const [value,setValue] = useState("")
  return (
    <div>
        <input type="text" placeholder='Write Something' onChange={(e)=>{setValue(e.target.value)}} className={styles.input}/>
        <button onClick={()=>{addTodo(value);
          setValue(" ");}} className={styles.btn}>+</button>
    </div>
  )
}

export default Todoinput
