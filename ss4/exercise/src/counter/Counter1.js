import React from 'react'
import useIncrement from '../components/useIncrement';


export default function Counter1() {
  const [count,increase] = useIncrement(1);

  return (
    <div>
       <p>{count}</p>
       <button onClick={()=>increase()}>Add 1</button>
    </div>
  )
}
