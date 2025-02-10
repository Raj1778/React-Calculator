import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        const sanitizedValue = calVal.replace(/x/g, "*").replace(/÷/g, "/");
        const result = eval(sanitizedValue);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else if (buttonText === "+/-") {
      setCalVal((prev) => (prev ? (-parseFloat(prev)).toString() : ""));
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
