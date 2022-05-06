import {Col, FormCheck} from "react-bootstrap";
import Accumulator from "./Accumulator/Accumulator";
import {useEffect, useState} from "react";
import AccumulatorsModal from "../Modal/AccumulatorsModal";
import styles from "./Accumulators.module.css";
import AccumulatorsHead from "./AccumulatorsHead"
import AddButtonModal from "../Modal/AddButtonModal";
import SpinBox from "../SpinBox/SpinBox";




let Accumulators = (props) => {

    useEffect(() => {
        props.getAccumulators()
    },[])


    

  {/*  const [modalNew, setModalNew] = 
            props.accumulators.map((el, string) => {
            string = "modal" + el.id; 
            useState({ 
                string: false 
        })
    }) */}

    const [modal, setModal] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false
    })

    const [x, setX] = useState(false);

    const [addButtonModalState, setAddButtonModal] = useState(false);
    
    let AccumItems = props.accumulators.map((el, i) => {
        return (
            <div>
                <Accumulator i={i} id={el.id} modalStateChanged = {() => {setModal({
                        ...modal, modal1: !modal.modal1
                    }); setAddButtonModal(false)}} checked = {x} stateChanged = {() => {setX(!x); setModal({ ...modal, modal1: false}); 
                    setAddButtonModal(false)}}/>
                <AccumulatorsModal title = {'Изменить аккумулятор ' + el.id} isOpened = {modal.modal1}>
                    <div className = {styles.identificatorOfAcc}>
                        <SpinBox fontSizeOfLabel = {14} spacing = {90} leftOffset = {0} topOffset = {6} inputWidth = {90} inputHeight = {20} 
                        marginTopLabel = {5} paddindBottom = {7} value = {el.id} step = {1}>
                            Идентификатор аккумулятора:
                        </SpinBox>
                    </div>
                    <SpinBox fontSizeOfLabel = {14} spacing = {20} leftOffset = {0} topOffset = {7} inputWidth = {140} inputHeight = {20} 
                    marginTopLabel = {5} value = {el.correction_temperature_offset}>
                        Поправочное смещение температуры, ℃:
                    </SpinBox>
                </AccumulatorsModal>
            </div>
        ) 
    })

    return (
        <Col xs={12} className = {styles.accumulators}>
            <AccumulatorsHead title = "Аккумуляторы" countOfChoosen = {0} countOfAllObjects = {props.accumulators.length}
            addModalChangeState = {() => {setAddButtonModal(!addButtonModalState)}}>
            </AccumulatorsHead>
            <AddButtonModal title = "Добавить аккумуляторы" isOpened = {addButtonModalState}>
                <SpinBox fontSizeOfLabel = {20} spacing = {60} leftOffset = {30} topOffset = {10} inputWidth = {90} inputHeight = {10}>
                    Количество
                </SpinBox>
                <SpinBox fontSizeOfLabel = {20} spacing = {90} leftOffset = {30} topOffset = {10} inputWidth = {90} inputHeight = {10}>
                    Начать с
                </SpinBox>
                <button className={styles.submit_btn}>
                    <span style = {{textAlign: "center", paddingBottom: 50}}> Сохранить </span>
                </button>
            </AddButtonModal>
            <div className= {styles.accumulatorsChoose}>
                Выбеите аккумулятор
            </div>
            {AccumItems}
        </Col>
    )
}

export default Accumulators