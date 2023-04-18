import React from 'react'
import './SliderCategories.scss'
import Slider from "react-slick";
import CategoryCard from '../CategoryCard/CategoryCard';
const SliderCategories = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinity: true,
                  dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinity: true,
                  dots: true
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinity: true,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinity: true,
                  dots: true
                }
              },

          ]
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