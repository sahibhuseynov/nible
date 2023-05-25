import React from 'react';
import './FoodCard.scss';
import foodcardimage from '../../../assets/images/foodcard.png'
import starIcon from '../../../assets/images/icons/star-icon.svg'
import silverwareIcon from '../../../assets/images/icons/silverware-icon.svg'
import deliveryIcon from '../../../assets/images/icons/delivery-icon.svg'

const FoodCard = ({data}) => {
  return (
    <div className='food__card'>
        <div className='food__card__image'>
            <img src={data.image} alt="" />
        </div>
        <div className='food__card__content'>
            <div className="card__content__top">
            <h4>{data.name}</h4>
            <div className="delivery__info">
                    <span className='caption-2'>Free delivery</span>
                </div>
            </div>
            <div className="card__content__bottom">
            <div className='info__item'>
            <div className='icon__img'><img src={starIcon} alt="" /></div>

                    <h6>4,8</h6>
                    <span className='caption-1'>
                        (1,873)
                    </span>
                </div>
                <div className='info__item'>
                    <div className='icon__img'><img src={silverwareIcon} alt="" /></div>
                    
                    <span className='caption-1'>
                    Burger
                    </span>
                </div>
                <div className='info__item'>
                    <div className='icon__img'><img src={deliveryIcon} alt="" /></div>
                    
                    <span className='caption-1'>
                    25-30 min
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodCard