import "./App.css";
import { useState } from "react";

function App() {
  // ex1
  // const [age, setAge] = useState(0)

  // const increaseAge = () => {
  //   setAge(age + 1)
  //   console.log(age)
  // }

  // ex2
  // const [inputValue, setInputValue] = useState('')

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value)
  // }

  // ex3
  // const [showText, setShowText] = useState(true)

  // ex4
  // const [textColor, setTextColor] = useState("black");

  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const setZero = () => {
    setCount(0)
  }

  return (
    <div className="App">
      {/* ex1 */}
      {/* {age}
    <button onClick={increaseAge}>Increase Age</button> */}

      {/* ex2 */}
      {/* <input type="text" onChange={handleInputChange} name="" id="" />
    <h1>{inputValue}</h1> */}

      {/* ex3 */}
      {/* <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button> */}

{/* ex4 */}
      {/* <button
        onClick={() => {
          setTextColor(textColor === 'red' ? 'black' : 'red');
        }}
      >
        Change color
      </button>
      {showText && <h1>Hi my name is Akki</h1>}
      <h1 style={{ color: textColor }}>Hi my name is Akki</h1> */}

{/* exercise */}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Set Zero</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
