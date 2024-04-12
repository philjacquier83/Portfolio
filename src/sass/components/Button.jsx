import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Visuals from '../../assets/vsl_mathles.json'

function Button({ text }) {
    
    const [ isModal, setIsModal ] = useState('')
    const handleOpenModal = (newModal) => {
        setIsModal(newModal)
    }

    const handleCloseModal = () => {
        setIsModal('')
    }

    const [ currentImg, setCurrentImg ] = useState(0)
    const handlePreviousImg = () => {
        if(currentImg == 0) {
            setCurrentImg(Visuals.length - 1)
        } else {
            setCurrentImg(prev => prev - 1)
        }
    }
    const handleNextImg = () => {
        if(currentImg == Visuals.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg(prev => prev  + 1)
        }
    }

console.log(isModal);
    return (
        <>
            <div onClick={() => handleOpenModal({isModal})} className="btn">{text}</div>

            <div className={`modal ${isModal !== '' && 'modal__Open'}`}>
                <div className="containerModal">
                    <div onClick={handleCloseModal} className="closeModal"><FontAwesomeIcon icon={faXmark} /></div>
                    <div className='textModal'>
                        <div className="visual">
                            <FontAwesomeIcon icon={faAngleLeft} className='arrowNav' onClick={handlePreviousImg} /> 
                            <img src={Visuals[currentImg].src} />
                            <FontAwesomeIcon icon={faAngleRight} className='arrowNav' onClick={handleNextImg} />                             
                        </div>
                        <div className="legend">{Visuals[currentImg].legend} ({currentImg + 1} / {Visuals.length})</div>
                    </div>
                </div>
            </div>
        </>
    )

}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button