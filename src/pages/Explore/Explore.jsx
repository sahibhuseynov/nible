import React from 'react'
import Foods from './../../components/Foods/Foods';
import chevronRight from '../../assets/images/icons/chevron-right-icon.svg'
import FoodCard from '../../components/UI/FoodCard/FoodCard';
const Explore = () => {
 
  return (
    <div>
      <section className='Featured restaurants'>
      <div className='items__context'>
          <h2>Restaurants nearby</h2>
          <div className='see__all'>
            <span>See all</span>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <Foods />
      </section>
      
      <div className='foodCard__conatiner'>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        </div>
    </div>
  )
}

export default Explore