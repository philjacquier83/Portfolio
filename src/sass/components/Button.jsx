import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import vsl_mathles from '../../assets/vsl_mathles.json'
import vsl_lousdiner from '../../assets/vsl_lousdiner.json'
import vsl_tictactoe from '../../assets/vsl_tictactoe.json'
import vsl_oc7 from '../../assets/vsl_oc7.json'
import vsl_oc5 from '../../assets/vsl_oc5.json'
import vsl_oc3 from '../../assets/vsl_oc3.json'
import vsl_oc2 from '../../assets/vsl_oc2.json'

function Button({ text, category }) {
    
    const visuals = category == 1 ? vsl_mathles : 
                    category == 2 ? vsl_lousdiner :
                    category == 3 ? vsl_tictactoe :
                    category == 4 ? vsl_oc7 :
                    category == 5 ? vsl_oc5 :
                    category == 6 ? vsl_oc3 : vsl_oc2
console.log(category);
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
            setCurrentImg(visuals.length - 1)
        } else {
            setCurrentImg(prev => prev - 1)
        }
    }
    const handleNextImg = () => {
        if(currentImg == visuals.length - 1) {
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
                            <img src={visuals[currentImg].src} />
                            <FontAwesomeIcon icon={faAngleRight} className='arrowNav' onClick={handleNextImg} />                             
                        </div>
                        
                        <div className="legend">
                            {visuals[currentImg].legend.map((legendItem, item) =>
                            <div key={`LegendItem-${item}`}>{legendItem}</div>
                        )} ({currentImg + 1} / {visuals.length})</div>
                    </div>
                </div>
            </div>
        </>
    )

}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired
}

export default Button