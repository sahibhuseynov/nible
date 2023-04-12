import React from 'react'
import './RestaurantCard.scss'
import burgerKing from '../../../assets/images/burgerKing.svg'
import starIcon from '../../../assets/images/icons/star-icon.svg'
import silverwareIcon from '../../../assets/images/icons/silverware-icon.svg'
import moneyIcon from '../../../assets/images/icons/money-icon.svg'
const RestaurantCard = () => {
  return (
    <div className='restaurant__card'>
        <div className='card__image'>
            <img src={burgerKing} alt="" />
        </div>
        <div className='card__content'>
            <h4>Burger King</h4>
            <div className='content__info'>
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
            </div>
            <div className="content__bottom">
                <div className="delivery__info">
                    <span className='caption-2'>Free delivery</span>
                </div>
                <div className="price__info">
                    <img src={moneyIcon} alt="" />
                    <span className='caption-1'>$10.00</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard