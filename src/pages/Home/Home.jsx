import React from 'react'
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard'
import chevronRight from '../../assets/images/icons/chevron-right-icon.svg'
import SliderCategories from '../../components/UI/SliderCategories/SliderCategories'
const Home = () => {
  return (
    <div>
      <section className='explore__categories'>
        <div className='items__context'>
          <h2>Explore categories</h2>
          <div className='see__all'>
            <h4>See all</h4>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <SliderCategories />
      </section>
      
    </div>
  )
}

export default Home