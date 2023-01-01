// import React from 'react'
import { useState } from 'react'
import ButtonCounter from './components/ButtonCounter';
const CounterApp = () => {
    const [messaje, setMensaje]= useState("")
    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
    })
    const {counter1, counter2, counter3} = counter

    const updateCounter = (elemento, action = "sumar", posicion="counter1") =>{
        if(action == "sumar" && posicion == "counter1"){
                setCounter({...counter, counter1 : counter1 + 1})
                return 
            }
        if(action == "sumar" && posicion == "counter2"){
                setCounter({...counter, counter2 : counter2 + 1})
                return 
           }
        if(action == "sumar" && posicion == "counter3"){
                setCounter({...counter, counter3 : counter3 + 1})
                return 
            }
        
            if(action == "restar" && posicion == "counter1"){
                setCounter({...counter, counter1 : counter1 - 1})
                return 
            }

            if(action == "restar" && posicion == "counter2"){
                setCounter({...counter, counter2 : counter2 - 1})
                return 
            }

            if(action == "restar" && posicion == "counter3"){
                setCounter({...counter, counter3 : counter3  - 1})
                return 
            }
           
            
            // setMensaje(`el valor ${posicion} no se encuestra definido`)
            
            // return; 
        } 
       
       
    
  return (
      <>
          <h1>usestate hook</h1>
          <h2 onClick={() => updateCounter( counter1, "sumar", "counter1")}>Counter1: {counter1}</h2>
          <h2>Counter2: {counter2}</h2>
          <h2>Counter3: {counter3}</h2>
          <ButtonCounter
              messaje={"Actualizar valores para Counter1"}
              valor={counter1}
              updateCounter={updateCounter}
              contador={"counter1"}
          />

         <ButtonCounter
              messaje={"Actualizar valores para Counter2"}
              valor={counter1}
              updateCounter={updateCounter}
              contador={"counter2"}
          />
          <ButtonCounter
              messaje={"Actualizar valores para Counter3"}
              valor={counter1}
              updateCounter={updateCounter}
              contador={"counter3"}
          />
      </>
  );
}

export default CounterApp