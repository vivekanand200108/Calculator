import React from 'react'
import Styles from './App.module.css';

const CallButton = ({ onButtonClick }) => {
    const buttonLists = ["c", "1", "2", "3", "+", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
    return (
        <>
            <div className={Styles.buttonContainer}>
                {buttonLists.map(buttonList => <button onClick={() => onButtonClick(buttonList)} className={Styles.button}>{buttonList}</button>)}
            </div>
        </>
    )
}

export default CallButton