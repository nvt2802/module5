import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getTodo } from './TodoService';

export default function Todo() {
    const [todo,setTodo]= useState([]);

    useEffect(()=>{
        getAll();
    },[])

    const getAll = async () => {
        const result = await getTodo();
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
