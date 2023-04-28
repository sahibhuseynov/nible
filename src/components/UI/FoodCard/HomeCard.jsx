import React from 'react';
import './FoodCard.scss';
import foodcardimage from '../../../assets/images/foodcard.png'
import starIcon from '../../../assets/images/icons/star-icon.svg'
import silverwareIcon from '../../../assets/images/icons/silverware-icon.svg'
import deliveryIcon from '../../../assets/images/icons/delivery-icon.svg'

const HomeCard = () => {
  return (
    <div className='food__card'>
        <div className='food__card__image'>
            <img src={foodcardimage} alt="" />
        </div>
        <div className='food__card__content'>
            <div className="card__content__top">
            <h4>Spicy Na Thai Town</h4>
            <div className="delivery__info">
                    <span className='caption-2'>Free delivery</span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HomeCard