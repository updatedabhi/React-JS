/*
what is useEffect hook?
In React, useEffect is a Hook that lets you perform side effects in function components.
 It serves a similar purpose to lifecycle methods in class components
  such as componentDidMount, componentDidUpdate, and componentWillUnmount.
   You can use useEffect to handle operations like data fetching, subscriptions, or manually changing the DOM.
*/

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Useeffect = () => {

  const [data, setData] = useState("");

  const [count, setCount] = useState(0);

  useEffect(()=> {
    axios('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      setData(res.data[0].email);
      console.log("API is called");
    })
  }, [])

  return (
    <div>
      <h1>Hello World {data}</h1>
      <h1>{count}</h1>
      <button className='px-8 py-2 border-black border-2' onClick={
        ()=> setCount(count+1)
      }>+</button>
    </div>
  )
}

export default Useeffect
