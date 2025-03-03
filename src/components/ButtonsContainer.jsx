import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "%",
    "÷",
    "x",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "+/-",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            buttonName === "0" ? styles.zeroButton : ""
          }`}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
