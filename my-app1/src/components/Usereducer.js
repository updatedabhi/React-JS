import React from 'react'
import { useReducer } from 'react';

const reducer = (state, action)=> {
  console.log(state, action);
  if (action.type === 'one') {
    return {count: state.count + 1};
  } else if (action.type === 'two') {
    return {count: state.count + 2};
  } else if (action.type === 'three') {
    return {count: state.count + 3};
  } else if (action.type === 'four') {
    return {count: state.count + 4};
  } else {
    return state;
  }
}
function Usereducer() {
  const[state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=> dispatch({type: 'one'})}>increment by 1</button>
      <button onClick={()=> dispatch({type: 'two'})}>increment by 2</button>
      <button onClick={()=> dispatch({type: 'three'})}>increment by 3</button>
      <button onClick={()=> dispatch({type: 'four'})}>increment by 4</button>
    </div>
  )
}

export default Usereducer
