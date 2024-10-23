import React from 'react'
import "./App.css"
import UseLayoutEffectHook from './Hooks/UseLayoutEffectHook'
// import Useref from './Hooks/Useref'
// import Useeffect from './Hooks/Useeffect'
// import Usereducer from './Hooks/Usereducer'
// import UseState from './Hooks/UseState'
// import Usestate2 from './Hooks/Usestate2'

const App = () => {
  return (
    <div className='flex justify-center align-center'>
      {/* <UseState />
      <Usestate2 /> */}
      {/* <Usereducer/> */}
      {/* <Useeffect /> */}
      {/* <Useref /> */}
      <UseLayoutEffectHook />
    </div>
  )
}

export default App
