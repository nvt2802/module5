import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Todo() {
    const [todo,setTodo]= useState([]);

    useEffect(()=>{
        getAll();
    },[])

    const getAll = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        setTodo((prev)=>result.data)
    }
  return (
    <div>
        <ul>
            {
                todo.map((element,index) => {
                    return <li key={index}>{element.title}</li>
                })
                }
            
        </ul>
    </div>
  )
}
