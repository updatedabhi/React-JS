import React, {useLayoutEffect, useEffect, useRef} from 'react'

const UseLayoutEffectHook = () => {

  const inputRef = useRef(null);


  useEffect(()=> {
    inputRef.current.value = "PEDRO";
  }, [])
  
  useLayoutEffect(()=> {
    console.log(inputRef.current.value);
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} value="Abhishek" style={{width: 400, height: 100}}/>
    </div>
  )
}

export default UseLayoutEffectHook
