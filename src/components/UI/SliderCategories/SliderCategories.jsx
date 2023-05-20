import React from "react";
import "./SliderCategories.scss";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard/CategoryCard";
import fireIcon from "../../../assets/images/icons/fire-icon2.svg";
import deliveryIcon from "../../../assets/images/icons/delivery-icon2.svg";
import walletIcon from "../../../assets/images/icons/wallet-icon2.svg";
import silverWareIcon from "../../../assets/images/icons/silverware-icon2.svg";
import restaurantIcon from "../../../assets/images/icons/restaurant-icon.svg";
import mapIcon from "../../../assets/images/icons/map-icon.svg";
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
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinity: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinity: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <CategoryCard
            pathName={"/popular"}
            icon={fireIcon}
            color={"rgba(251, 109, 58, 1)"}
            title={"Popular"}
            options={"286+ options"}
          />
        </div>

        <div>
          <CategoryCard
          pathName={"/delivery"}
            icon={deliveryIcon}
            color={"rgba(80, 62, 157, 1)"}
            title={"Fast delivery"}
            options={"1.843+ options"}
          />
        </div>
        <div>
          <CategoryCard
            pathName={"/higclass"}
            icon={walletIcon}
            title={"High class"}
            color={"rgba(250, 205, 93, 1)"}
            options={"145+ options"}
          />
        </div>
        <div>
          <CategoryCard
            pathName={"/dinein"}
            icon={silverWareIcon}
            title={"Dine in"}
            color={"rgba(251, 109, 58, 1)"}
            options={"450+ options"}
          />
        </div>
        <div>
          <CategoryCard
            pathName={"/pickup"}
            icon={restaurantIcon}
            title={"Pick up"}
            color={"rgba(80, 62, 157, 1)"}
            options={"2.245+ options"}
          />
        </div>
        <div>
          <CategoryCard
            pathName={"/nearest"}
            icon={mapIcon}
            title={"Nearest"}
            color={"rgba(250, 205, 93, 1)"}
            options={"41+ options"}
          />
        </div>
      </Slider>
    </>
  );
};

export default SliderCategories;
