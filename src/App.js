import { Fragment, useState } from 'react';
import './App.css';

// const numbers = Array.from({length: 31}, (_, i) => i + 1)

// const addends = [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
// [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31], 
// [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31], 
// [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31], 
// [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]]

const addends = [
  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
  [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63], 
  [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63], 
  [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47,56, 57, 58, 59, 60, 61, 62, 63], 
  [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
  [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
  ]
  

const NumberTile = ({addends, colorStep}) => {
  const currDivColor = colorStep % 2 === 0 ? 'even-color' : 'odd-color';
  const addendList = addends.map((addend) => <div className={`box ${currDivColor}`} key={addend}>{addend}</div>)
  return addendList
}

function App() {
  const[step, setStep] = useState(0);
  const[guess, SetGuess] = useState(0)

  const incrementStep = () => {
    setStep(step + 1)
  }

  const newGuessNumber = () => {
    SetGuess(guess + addends[step][0])
    setStep(step + 1)
  }

  const refreshStates = () => {
    setStep(0)
    SetGuess(0)
  }

  let curr_display;
  if (step < addends.length) {
    curr_display = <Fragment>
      <h2>Table Number {step + 1}</h2>
      <div className="grid-box">
        <NumberTile addends={addends[step]} colorStep={step} />
      </div>
      <div>
        <h2>Is your number in this table?</h2>
      </div>
      <div>
        <button className="btn" onClick={newGuessNumber}>Yes</button>
        <button className="btn cancel" onClick={incrementStep}>No</button>
      </div>
    </Fragment>
  } else {
    curr_display = <Fragment>
      <div>
        <h2>The number you are think of is:</h2>
        <h1>{guess}</h1>
      </div>
      <div>
        <button className="btn" onClick={refreshStates}>Play Again</button>
      </div>
    </Fragment>
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Mind Reader App</h1>
        <h2>Think of a number between 1 and 63. </h2>
        <h2> We will guess the number.</h2>
      </div>
      <div>
        <Fragment>
          { curr_display }
        </Fragment>
      </div>
    </div>
  );
}

export default App;
