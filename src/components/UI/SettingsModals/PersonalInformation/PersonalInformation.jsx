import React from 'react'
import './PersonalInformation.scss'
import { closeModal } from '../../../../store/settingsModal/settingsModal'
import { useDispatch } from 'react-redux'
import closeIcon from '../../../../assets/images/icons/close-icon2.svg'
import profileIcon from '../../../../assets/images/icons/profile-icon.svg'
import mailIcon from '../../../../assets/images/icons/mail-icon.svg'
import phoneIcon from '../../../../assets/images/icons/phone-icon.svg'

const PersonalInformation = () => {
    const dispatch = useDispatch()
  return (
    <div className='settings__modal__container'>
        <div className="top">
            <h2>Personal information</h2>
            <img src={closeIcon} alt=""
            onClick={() => dispatch(closeModal())}
            />

        </div>
        <span>Profile image</span>
        <div className='user__image__actions'>
            <div className="user__image">
                <img src="" alt="" />
            </div>
            <div className='action__btn'>
                <h5>Upload</h5>
            </div>
            <div className='action__btn'>
                <h5>Delete</h5>
            </div>
        </div>
        <span>Profile details</span>
        <div className="info__container">
        <div className="user__information">
            <div className="info__img">
                <img src={profileIcon} alt="" />
            </div>
            <div className='info__content'>
                <span className='caption-3'>
                FULL NAME
                </span>
                <span>Mark Clarke</span>
                <div className="bottom__line"></div>
            </div>
        </div>
        <div className="user__information">
            <div className="info__img">
                <img src={mailIcon} alt="" />
            </div>
            <div className='info__content'>
                <span className='caption-3'>
                EMAIL ADDRESS
                </span>
                <span>markclarke@gmail.com</span>
                <div className="bottom__line"></div>
            </div>
        </div>
        <div className="user__information">
            <div className="info__img">
                <img src={phoneIcon} alt="" />
            </div>
            <div className='info__content'>
                <span className='caption-3'>
                PHONE NUMBER
                </span>
                <span>+1 (234) 5678 900</span>
                <div className="bottom__line"></div>
            </div>
        </div>
        </div>
        <div className="modal__btn">
            <h3>Update profile</h3>
        </div>
    </div>
  )
}

export default PersonalInformation