import React from 'react'
import Styles from './App.module.css';

const CalInput = ({ calInputVal }) => {
    return (
        <>
            <input className={Styles.display} type="text" value={calInputVal} readOnly />
        </>
    )
}

export default CalInput