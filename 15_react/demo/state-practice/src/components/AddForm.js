import React from "react";
import { useState } from 'react'


function AddForm(props) {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        let answer = Number(num1) + Number(num2)
        console.log(answer)
        props.setResult(answer)
    }

    return(
    <form onSubmit={handleSubmit}>
        <h1>I am add form</h1>
        <label htmlFor="number1">Number 1 is:</label>
        <input id="number1" type="number" name="number1" value={num1} onChange={(event) => setNum1(event.target.value)}/>
        <label htmlFor="number2">Number 2 is:  </label>
        <input id="number2" type="number" name="number2" value={num2} onChange={(event) => setNum2(event.target.value)}/>
        <button type='submit'>Show the sum</button>
    </form>
    ) 
}

export default AddForm;
