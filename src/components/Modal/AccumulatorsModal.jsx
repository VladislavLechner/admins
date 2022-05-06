import './AccumulatorsModal.css'

const AccumulatorsModal = props => {


    return (
        <div className={`modal__wrapper__acc ${props.isOpened ? 'open' : 'close'}`} style = {{...props.style}}>
            <div className='modal__body__acc'>
                <h6>{props.title}</h6>
                {props.children}
            </div>
        </div>
    )
}

export default AccumulatorsModal;