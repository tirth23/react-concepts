import React from 'react'
import LiftingStateChild from './LiftingStateChild.jsx'

/* lifting State Up: Lifting State to common parent. Passing data from Children to Parent.Lifting state up is a pattern in React where you move the 
state from a lower-level component to a higher-level component, so that it can be shared between multiple child components */
/* 
Three ways :-
using UseCallback - current approach
using Context
using Redux 
*/
const LiftingStateParent = () => {
  function getData(data) {
    console.log({data})
  }
  return (
    <>
      <LiftingStateChild getData={getData} />
    </>
  )
}

export default LiftingStateParent;