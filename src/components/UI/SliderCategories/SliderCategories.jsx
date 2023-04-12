import React from 'react'
import Slider from "react-slick";
import CategoryCard from '../CategoryCard/CategoryCard';
const SliderCategories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <>
        <Slider {...settings}>
            <div>
                <CategoryCard />
            </div>
            <div>
                <CategoryCard />
            </div>
            <div>
                <CategoryCard />
            </div>
            <div>
                <CategoryCard />
            </div>
            <div>
                <CategoryCard />
            </div>
            <div>
                <CategoryCard />
            </div>
        </Slider>
    </>
  )
}

export default SliderCategories