import './AddButtonModal.css'

const AddButtonModal = props => {


    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style = {{...props.style}}>
            <div className='modal__body'>
                <div className='modal__title'>{props.title}</div>
                <div className='modal__line'></div>
                {props.children}
            </div>
        </div>
    )
}

export default AddButtonModal;