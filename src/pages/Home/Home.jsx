import React from 'react'
import './Home.scss'
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard'
import chevronRight from '../../assets/images/icons/chevron-right-icon.svg'
import SliderCategories from '../../components/UI/SliderCategories/SliderCategories'
import Foods from '../../components/Foods/Foods'
import HomeCards from './../../components/HomeCard/HomeCards';
const Home = () => {
  return (
    <div className='home'>
      <section className='explore__categories'>
        <div className='items__context'>
          <h2>Explore categories</h2>
          <div className='see__all'>
            <span>See all</span>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <SliderCategories />
      </section>
      
      <section className='Featured restaurants'>
      <div className='items__context'>
          <h2>Featured restaurants</h2>
          <div className='see__all'>
            <span>See all</span>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        <Foods />
      </section>
      <section className='foods__cards'>
      <div className='items__context'>
          <h2>Asian food</h2>
          <div className='see__all'>
            <span>See all</span>
            <img src={chevronRight} alt="" />
          </div>
        </div>
        
          <HomeCards />
      
      </section>
    </div>
  )
}

export default Home