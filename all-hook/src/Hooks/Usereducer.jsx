/*
What is useReducer hook?

The useReducer hook in React is a powerful
 alternative to useState for managing more complex state logic. 
 It is often used when you have state that depends on previous state,
  or when you find yourself needing to manage multiple pieces of 
  state that change in response to various actions.
*/

import React, { useReducer } from 'react'

const Usereducer = () => {

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1, showText: state.showText }
      case 'toggleShowText':
        return { count: state.count, showText: !state.showText }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  })


  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({ type: 'increment' });
        dispatch({ type: 'toggleShowText' });
      }} className='bg-blue-800 rounded-md text-white px-3 py-2'>increment</button>

      {state.showText && <h1>Abhishek is good boy.</h1>}
    </div>
  )
}

export default Usereducer
