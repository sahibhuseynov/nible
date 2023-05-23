import React from 'react';
import './PaymentMetods.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../store/settingsModal/settingsModal';
import { setSelectedPayment } from '../../../../store/settingsModal/paymentModalSlice';
import closeIcon from '../../../../assets/images/icons/close-icon2.svg';
import cardIcon from '../../../../assets/images/icons/card-icon3.svg';
import moneyIcon from '../../../../assets/images/icons/mo.svg';
import paypalIcon from '../../../../assets/images/icons/paypal-icon2.svg';

const PaymentMetods = () => {
  const dispatch = useDispatch();
  const selectedPayment = useSelector((state) => state.paymentModal.selectedPayment);

  const handlePaymentMethodClick = (paymentMethod) => {
    dispatch(setSelectedPayment(paymentMethod));
  };

  return (
    <div className="settings__modal__container">
      <div className="top">
        <h2>Payment methods</h2>
        <img src={closeIcon} alt="" onClick={() => dispatch(closeModal())} />
      </div>
      <div className="metods">
        <div
          className={`card__metod ${selectedPayment === 'card' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodClick('card')}
        >
          <img src={cardIcon} alt="" />
        </div>
        <div className="money__metods">
          <div
            className={`money__metod ${selectedPayment === 'cash' ? 'selected' : ''}`}
            onClick={() => handlePaymentMethodClick('cash')}
          >
            <img src={moneyIcon} alt="" />
          </div>
          <div
            className={`money__metod ${selectedPayment === 'paypal' ? 'selected' : ''}`}
            onClick={() => handlePaymentMethodClick('paypal')}
          >
            <img src={paypalIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="modal__btn">
        <h3>Update preferences</h3>
      </div>
    </div>
  );
};

export default PaymentMetods;
