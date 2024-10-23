import React from 'react'
import { useReducer } from 'react'
import "./Task.css"

const reducer = (state, action)=> {
  if (action.type === 'red') {
    return {bg: 'red'};
  } else if (action.type === 'blue') {
    return {bg: 'blue'};
  } else if (action.type === 'green') {
    return {bg: 'green'};
  } else if (action.type === 'pink') {
    return {bg: 'pink'};
  } else {
    return state;
  }
}
function Task() {
  const[state, dispatch] = useReducer(reducer, {bg: 'white'});
  return (
    <div>
      <div style={{height: "400px", width: "400px", border: "2px solid"}} className={state.bg}></div>
      <button onClick={()=>dispatch({type: 'red'})}>red</button>
      <button onClick={()=>dispatch({type: 'blue'})}>blue</button>
      <button onClick={()=>dispatch({type: 'green'})}>green</button>
      <button onClick={()=>dispatch({type: 'pink'})}>pink</button>
    </div>
  )
}

export default Task
