import React, {useRef, useState} from 'react'

const Useref = () => {
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>{inputValue}</h1>
      <input type="text" placeholder='Ex...' ref={inputRef}/>
      <button onClick={()=> {
        // inputRef.current.value = "";
        inputRef.current.focus();
        setInputValue(inputRef.current.value);
      }}>change name</button>
    </div>
  )
}

export default Useref
