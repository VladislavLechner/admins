import {TextField, InputBase} from "@material-ui/core"
import React, { makeStyles, useState } from "react"
import styles from "./SpinBox.module.css";




let SpinBox = props => {

    const [value, setValue] = useState(props.value);
        return (
                <div className={styles.spinBox} style = {{marginLeft: props.leftOffset, marginTop: props.topOffset, 
                paddingBottom: props.paddindBottom}}>
                    <div className={styles.label} style={{marginRight: props.spacing, fontSize: props.fontSizeOfLabel, marginTop: props.marginTopLabel}} >
                        {props.children}
                    </div>
                    <InputBase id="number"
                        className={styles.input}
                        type="number"
                        value={value}
                        inputProps={{ style: { color: "white", width: props.inputWidth, height: props.inputHeight, paddingLeft: 10, paddingBottom: 4, 
                        paddingRight: 10}}}>
                     </InputBase>
                </div>
        )
}

export default SpinBox