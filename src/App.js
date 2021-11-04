import { Fragment, useState } from 'react';
import './App.css';

// const numbers = Array.from({length: 31}, (_, i) => i + 1)

const addends = [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31], 
[4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31], 
[8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31], 
[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]]

const NumberTile = ({addends}) => {
  const addendList = addends.map((addend) => <div className="box" key={addend}>{addend}</div>)
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
  console.log(Object.prototype.toString.call(step));
  if (step < addends.length) {
    curr_display = <Fragment>
      <h2>Table Number {step + 1}</h2>
      <div className="grid-box">
        <NumberTile addends={addends[step]} />
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
        <button className="btn" onClick={refreshStates}>Refresh</button>
      </div>
    </Fragment>
  }

  return (
    <div className="container">
      <h1>Mind Reader</h1>
      <h3>Think of a number between 1 and 31, and we will tell you which number it is</h3>
      <div>
        <Fragment>
          { curr_display }
        </Fragment>
      </div>
    </div>
  );
}

export default App;
