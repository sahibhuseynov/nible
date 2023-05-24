import React from 'react'
import './SavedAdress.scss'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../../store/settingsModal/settingsModal'
import closeIcon from '../../../../assets/images/icons/close-icon2.svg'
import profileIcon from '../../../../assets/images/icons/profile-icon.svg'
import chevronRight from '../../../../assets/images/icons/chevron-right2.svg';

const SavedAdress = () => {
    const dispatch = useDispatch()
  return (
    <div className='settings__modal__container'>
        <div className="top">
            <h2>Saved addresses</h2>
            <img src={closeIcon} alt=""
            onClick={() => dispatch(closeModal())}
            />

        </div>
        <div className='saved__actions'>
            
            <div className='action__btn'>
                <h5>Home (2)</h5>
            </div>
            <div className='action__btn'>
                <h5>Work (3)</h5>
            </div>
        </div>
        <div className="adress__information">
            <div className="info__img">
                <img src={profileIcon} alt="" />
            </div>
            <div className='info__content'>
                <span className='caption-3'>
                ADDRESS
                </span>
                <span>775 Cletus Estates Suite 423</span>
               
                <div className="bottom__line"></div>
            </div>
            <img src={chevronRight} alt="" />
        </div>
        <div className='info__container'>
            <div className="adress__information">
                <div className="info__img">
                    <img src={profileIcon} alt="" />
                </div>
                <div className='info__content'>
                    <span className='caption-3'>
                    ADDRESS
                    </span>
                    <span>775 Cletus Estates Suite 423</span>
                   
                    <div className="bottom__line"></div>
                </div>
                <img src={chevronRight} alt="" />
            </div>
        </div>
        <button className="modal__btn">
            <h3>Save changes</h3>
        </button>
    </div>
  )
}

export default SavedAdress