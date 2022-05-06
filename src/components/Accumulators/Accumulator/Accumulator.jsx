import FormCheckInput from "react-bootstrap/FormCheckInput";
import styles from "./Accumulator.module.css";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {FormCheck} from "react-bootstrap";
import React, { useState } from "react"


let Accumulator = props => {
        return (
            <div onClick = {props.modalStateChanged}>
                <FormCheck type={"checkbox"} key={props.i} className = {styles.accumCheckbox}>
                    <FormCheckInput type={'checkbox'} className={styles.accumInput} checked={props.checked} onChange={props.stateChanged}/>
                    <FormCheckLabel>{`Аккумулятор ${props.id}`}</FormCheckLabel>
                </FormCheck>
            </div>
        )
}

export default Accumulator