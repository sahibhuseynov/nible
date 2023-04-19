import React from 'react'
import './Foods.scss'
import RestaurantCard from './../UI/RestaurantCard/RestaurantCard';
const Foods = () => {
  return (
    <div className='foods__container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>
  )
}

export default Foods