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
        <div className="check__container">
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Promotional emails</span>
  </div>
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Monthly newsletter</span>
  </div>
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Feedback collection</span>
  </div>
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Discounts & offers</span>
  </div>
</div>
<button className="modal__btn">
            <h3>Update preferences</h3>
        </button>

    </div>
  )
}

export default MarketingPre