import {useState} from 'react'

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
  function increase(){
      setCount((value) => (value+addAmount));
  }
  return [count, increase];
}
