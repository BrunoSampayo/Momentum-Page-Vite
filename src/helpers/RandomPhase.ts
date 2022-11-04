
import React from "react"
import { phases } from "../types/PhasesType"

//Function that receives the array that contains all phases and usestate from app
//The function get the array length and generate a random number according array length
export const RandomPhase =(array:phases[]|undefined, setCurrentPhase:React.Dispatch<React.SetStateAction<phases | undefined>>)=>{
    if(array ){
      let phase = array[Math.floor(Math.random() * array.length)]
      setCurrentPhase(phase)
    }
  }

