import React from 'react'
import './Discounts.scss'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../../redux/slice/settingsModal/settingsModal'
import closeIcon from '../../../../assets/images/icons/close-icon2.svg'
import CouponCard from './../../CouponCard/CouponCard';

const Discounts = () => {
    const dispatch = useDispatch()
  return (
    <div className='settings__modal__container'>
        <div className="top">
            <h2>Discounts</h2>
            <img src={closeIcon} alt=""
            onClick={() => dispatch(closeModal())}
            />

        </div>
        <div className='discounts__container'>
            <CouponCard />
            <CouponCard />
        </div>
    </div>
  )
}

export default Discounts