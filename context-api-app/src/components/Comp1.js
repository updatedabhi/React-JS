import React from 'react'
import FirstName from '../App'

function Comp1() {
  return (
    <div>
      <FirstName.consumer>
        {
          (fName)=> {
            <h1>{fName}</h1>
          }
        }
      </FirstName.consumer>
    </div>
  )
}

export default Comp1
