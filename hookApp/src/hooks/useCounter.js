import { useState } from "react"
export const useCounter = (initialValue = 0) =>{
    const [counter, setCounter] = useState(initialValue)
    const incremetar = (valueToIncrement) => {
        setCounter(counter + valueToIncrement)
    }

    const decrementar = (valueToDecrement) => {
        if(counter < 0) {
            setCounter(0)
            return
    }
    setCounter(counter - valueToDecrement)

}
    const reset = () => {
        setCounter(initialValue)
    }
    return {
        counter,
        incremetar,
        decrementar,
        reset
    }
}
