import React, { useState } from 'react'

const Usestate2 = () => {

  const [inputValue, setInputValue] = useState("Abhishek");

  const handleChange = (e)=> {
    setInputValue(e.target.value)
  }

  return (
    <div className='flex justify-center'>
      <input onChange={handleChange} className='border-2 border-black' type="search" placeholder='enter something...' />
      {inputValue}
    </div>
  )
}

export default Usestate2
