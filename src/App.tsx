import * as C from './AppStyles'
import { useEffect, useState } from 'react'
import {phases} from './types/PhasesType'
import {CorrectClock} from './helpers/CurrentHours'


const App =() =>{

  const [phases, setPhases]= useState<phases[]>();
  const [currentPhase, setCurrentPhase]=useState<phases>();
  const [currentTime, SetCurrentTime]= useState<Date>(new Date);
  

  useEffect(()=>{
    teste()
  },[]);

  useEffect(()=>{
    RandomPhase(phases)
  },[phases])

  useEffect(()=>{
    setInterval(()=>{
        SetCurrentTime(new Date)
      },1000)
},[])

  
  const teste = async ()  =>{
    let response = await fetch('https://type.fit/api/quotes');
    let json= await response.json();
    setPhases(json)
   
  }

  const RandomPhase =(array:phases[]|undefined)=>{
    
    if(array){
      let phase = array[Math.floor(Math.random() * array.length)]
      
      setCurrentPhase(phase)
    }
  }
 
 const correctGreeting= (Hour:number)=>{
  
  if(Hour > 0 && Hour < 12){
    return('Bom Dia')
  }else if(Hour>12 && Hour < 18){
    return('Boa Tarde')
  }else if(Hour>18 && Hour <= 23){
    return('Boa Noite')
  }

 }


console.log('teste')
  return(
    <C.Container>
      
      <C.Info>
        <h1>{CorrectClock(currentTime.getHours(), currentTime.getMinutes())}</h1>
        <h2>{correctGreeting(currentTime.getHours())}, Fulano</h2>
      </C.Info>
      <C.Footer>
       {currentPhase && currentPhase.text}

        
      </C.Footer>
    </C.Container>
    
    )


}

export default App
