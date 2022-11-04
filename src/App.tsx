import * as C from './AppStyles'
import { useEffect, useState } from 'react'
import {phases} from './types/PhasesType'
import {CorrectClock} from './helpers/CurrentHours'
import { RandomPhase } from './helpers/RandomPhase'


const App =() =>{

    //UseState *************** AREA ***************
    //1º State to store array of phrases
    //2º State to store a phase drawn from the function
    //3º State to store current Date
    const [phases, setPhases]= useState<phases[]>();
    const [currentPhase, setCurrentPhase]=useState<phases>();
    const [currentTime, SetCurrentTime]= useState<Date>(new Date);
    
    //UseEffect *************** AREA *************** 
    //1º Call function to fill array phases
    //2º Call function to Randomize phase 
    //3º Call function to update current time
    useEffect(()=>{
      createPhases()
    },[]);

    useEffect(()=>{
      RandomPhase(phases,setCurrentPhase)
    },[phases])

    useEffect(()=>{
      setInterval(()=>{
          SetCurrentTime(new Date)
        },1000)
    },[])

    //Funtion to make request and fill phases
    const createPhases = async ()  =>{
      let response = await fetch('https://type.fit/api/quotes');
      let json= await response.json();
      setPhases(json)
    
    }
    
  const correctGreeting= (Hour:number)=>{
      if(Hour > 0 && Hour <= 12){
        return('Bom Dia')
      }else if(Hour>12 && Hour <= 18){
        return('Boa Tarde')
      }else if(Hour>18 && Hour <= 23){
        return('Boa Noite')
      }

    }


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
