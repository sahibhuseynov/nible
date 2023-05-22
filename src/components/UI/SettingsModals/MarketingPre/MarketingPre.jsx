import React from 'react'
import './MarketingPre.scss'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../../store/settingsModal/settingsModal'
import closeIcon from '../../../../assets/images/icons/close-icon2.svg'

const MarketingPre = () => {
    const dispatch = useDispatch()
  return (
    <div className='settings__modal__container'>
         <div className="top">
            <h2>Marketing preferences</h2>
            <img src={closeIcon} alt=""
            onClick={() => dispatch(closeModal())}
            />

        </div>
    </div>
  )
}

export default MarketingPre