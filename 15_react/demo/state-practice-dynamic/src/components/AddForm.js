import React, { useState, useEffect } from "react";

function AddForm(props) {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");


    const handleAddition = (event) => {
    let answer = Number(num1) + Number(num2)
    console.log(answer)
    props.setResult(answer)
    }

    useEffect(() => {
    handleAddition()
    }, [num1, num2])

return (
    <form>
        <label htmlFor="number1">Number 1:</label>
        <input id="number1" type="number" name="number1" value={num1} onChange={(event) => setNum1(event.target.value)}/>
        <label htmlFor="number2">Number 2:</label>
        <input id="number2" type="number" name="number2" value={num2} onChange={(event) => setNum2(event.target.value)}/>
        <button type="submit">Show the Sum</button>
    </form>
    );
}

export default AddForm;