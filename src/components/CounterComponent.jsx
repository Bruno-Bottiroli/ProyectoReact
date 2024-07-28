import { useState } from "react"

export default function CounterComponent(){
    const [counter, setCounter]= useState(1)

    const handleClickIncrement = () =>{
        setCounter(counter+1)
    }

    const handleClickDecrement = () =>{
        setCounter(counter-1)
    }

    return(
        <>
            <h4>Contador</h4>
            <p>{counter}</p>
            <button onClick={handleClickIncrement}>+</button>
            <button onClick={handleClickDecrement}>-</button>
        </>
    )
}