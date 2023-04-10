import React from "react";
import "./PromoCard.scss";
import fireIcon from "../../../assets/images/icons/fire-icon.svg";
import arrowLeftIcon from "../../../assets/images/icons/arrow-left-icon.svg";
import closeIcon from "../../../assets/images/icons/close-icon.svg";
import { Link } from 'react-router-dom';
const PromoCard = () => {
  return (
    <div className="card__container">
      <div className="close__btn">
        <img src={closeIcon} alt="closeIcon" />
      </div>
      <div className="card__content">
        <div className="card__img">
          <img src={fireIcon} alt="" />
        </div>
        <div className="card__text">
          <h4>Free delivery on <br /> all orders over <span>$25</span></h4>
          <p>
          It is a limited time offer that  will expire soon.
          </p>
        </div>
        
            <Link className="card__order__btn">
            <span>Order Now</span>
            <img src={arrowLeftIcon} alt="arrowLeftIcon" />
            </Link>
        
      </div>
    </div>
  );
};

export default PromoCard;
