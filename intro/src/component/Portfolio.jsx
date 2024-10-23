import React, { useState } from 'react'

export default function Portfolio() {
    const [counter, setCounter] = useState(0)
    const addone = ()=> {
        setCounter(counter + 1)
    }
    const subone = ()=> {
        if (counter > 0)
        {
            setCounter(counter - 1)
        }
    }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addone}>increment</button>
      <button onClick={subone}>decrement</button>
    </div>
  )
}
