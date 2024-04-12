import { faXmark } from '@fortawesome/free-solid-svg-icons'
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

console.log(isModal);
    return (
        <>
            <div onClick={() => handleOpenModal({isModal})} className="btn">{text}</div>

            <div className={`modal ${isModal !== '' && 'modal__Open'}`}>
                <div className="containerModal">
                    <div onClick={handleCloseModal} className="closeModal"><FontAwesomeIcon icon={faXmark} /></div>
                    <div className='textModal'>
                        <div className="visual">
                            <img src="/src/assets/vsl_mathles_1.png" />
                        </div>
                        <div className="legend">{Visuals[0].legend}</div>
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