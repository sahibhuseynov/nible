import React from 'react'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../../redux/slice/settingsModal/settingsModal';
import closeIcon from '../../../../assets/images/icons/close-icon2.svg';
const Support = () => {
    const dispatch = useDispatch();
  return (
    <div className='settings__modal__container'>
        <div className="top">
        <h2>Support</h2>
        <img src={closeIcon} alt="" onClick={() => dispatch(closeModal())} />
      </div>
    </div>
  )
}

export default Support