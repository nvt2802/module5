import React from 'react'
import useIncrement from '../components/useIncrement';


export default function Counter1() {
  const [count,increase] = useIncrement(2);

  return (
    <div>
       <p>{count}</p>
       <button onClick={()=>increase()}>Add 2</button>
    </div>
  )
}