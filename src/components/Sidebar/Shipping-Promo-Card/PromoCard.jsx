import React from "react";
import "./PromoCard.scss";
import fireIcon from "../../../assets/images/icons/fire-icon.svg";
import arrowRightIcon from "../../../assets/images/icons/arrow-right-icon.svg";
import closeIcon from "../../../assets/images/icons/close-icon.svg";
import { Link } from 'react-router-dom';
import Button from "../../UI/Button/Button";
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
          <p className="caption-1">
          It is a limited time offer that  will expire soon.
          </p>
        </div>
        
          <Link><Button size={'mediumIcon'} innerText={'Order now'} icon={arrowRightIcon}/></Link>
        
      </div>
    </div>
  );
};

export default PromoCard;
