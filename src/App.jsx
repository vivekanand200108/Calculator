
import { useState } from 'react';
import Styles from './App.module.css';
import CalInput from './CalInput';
import CallButton from './CallButton';

function App() {

  const [calval, setCalVal] = useState("")
  const onButClick = (text) => {
    if (text === "c") {
      setCalVal("")
    } else if (text === "=") {
      const result = eval(calval)
      setCalVal(result)
    } else {
      const newdisVal = calval + text;
      setCalVal(newdisVal)
    }
  }

  return (
    <>
      <center>
        <h1 style={{ color: "blue", margin: "10px", marginBottom: "20px", fontFamily: "sans-serif", fontWeight: "bolder" }}>Calculater</h1>
        <div className={Styles.calculater}>
          <CalInput calInputVal={calval} ></CalInput>
          <CallButton onButtonClick={onButClick}></CallButton>
        </div>
      </center>
    </>
  );
}

export default App;
