import { useState } from 'react'
import './App.css'
import Operacion from './Operacion'

function App() {
  const [count, setCount] = useState(0)
  const restar = (c) =>  {
    setCount(c - 1);
  }
  const sumar = (c) => {
    // console.log(`desde operacion suma con ${c}`)
    setCount(c + 1)};
  // console.log(count, "count")
  return (
    <div className="App">
      <p> el valor de counter es : {count}</p>
      <Operacion msj="Sumar"  operacion={sumar} count={count}/> 
      <Operacion msj="Restar" operacion={restar} count={count}/>
    </div>
  )
}

export default App
