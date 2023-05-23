import React from 'react'
import Foods from './../../components/Foods/Foods';
import chevronRight from '../../assets/images/icons/chevron-right-icon.svg'
import ExploreCards from '../../components/ExploreCards/ExploreCards';
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
      
      <div className='items__context'>
          <h2>Popular orders</h2>
          <div className='see__all'>
            <span>See all</span>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <ExploreCards />
    </div>
  )
}

export default Explore