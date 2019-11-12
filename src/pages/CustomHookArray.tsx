import React, { useState } from 'react';

const useNumber = (initial: number) => {
  const [value, setNumber] = useState(initial);

  return {
    value,
    setNumber
  };
}

const useArray = (initial: any[]) => {
  const [value, setArray] = useState(initial);

  function push(element: any) {
    console.log(`Adding an element to the Array : `, element)
    const newValue = value;
    newValue.push(element);
    console.log(`New Array : `, newValue);
    setArray(newValue);
  }

  function length() {
    console.log(`Value : `, value);
    console.log(`Value.length : `, value.length);
    return value.length;
  }

  return {
    value,
    setArray,
    push,
    length
  };
}

const CustomHookArray = () => {
  const [array, setArray] = useState([1, 2, 3]);
  const number = useNumber(5);
  const customArray = useArray([2]);

  return(
    <main className="Page">
      <h1>Custom Hook - Array</h1>
      <p>After several testing, using custom hook to manage Array isn't the best thing to do.</p>
      <p>It may require lots of settings, and actually add up more code than it saves.</p>

      <h2>Basic javascript Array</h2>
      <button onClick={() => {console.log(`Array : `, array)}}>Show array in console</button>
      <button onClick={() => {setArray([3, 2, 1])}}>Set array to [3, 2, 1]</button>
      <button onClick={() => {setArray([1, 2, 3])}}>Set array to [1, 2, 3]</button>
      
      <h2>Here is a number coded in a custom hook</h2>
      <p>{number.value}</p>
      <button onClick={() => {number.setNumber(3)}} >Change the number to 3</button>

      <h1>Here's an array managed by a custom hook</h1>
      <ul>
        {customArray.value.map((value, key) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <button onClick={() => {customArray.push(1)}}>Push a 1 to the array</button>
      <button onClick={() => {console.log(`Array : `, customArray)}}>Show array in console</button>
      <button onClick={() => {customArray.length()}}>Trigger length function</button>
    </main>
  )
}

export default CustomHookArray;
