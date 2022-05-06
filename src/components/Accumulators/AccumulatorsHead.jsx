import styles from "./Accumulators.module.css";

let AccumulatorsHead = (props) => {
    return (
        <div className={styles.headWrapper} style = {{...props.style}}>
            <h5 className={styles.titleOfHeader}> {props.title} </h5>
            <div className={styles.addAndRemoveBlock}>
                <div className={styles.chooseTitle}> Выбранно {props.countOfChoosen} объектов из {props.countOfAllObjects} </div>
                <button className={styles.buttonStyle}> Удалить - </button>
                <button className={styles.buttonStyle} onClick = {props.addModalChangeState}> Добавить + </button>
                <></>
            </div>
            <img className={styles.arrow} src={('./img/arrow.svg')} alt = "ar"/>
        </div>
    )
}

export default AccumulatorsHead