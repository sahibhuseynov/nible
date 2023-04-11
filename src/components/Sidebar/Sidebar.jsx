import React from 'react'
import './Sidebar.scss'
import { Link, useLocation } from "react-router-dom";
import homeIcon from '../../assets/images/icons/home-icon.svg'
import bookmarkIcon from '../../assets/images/icons/bookmark-icon.svg'
import settingsIcon from '../../assets/images/icons/settings-icon.svg'
import messagesIcon from '../../assets/images/icons/messages-icon.svg'
import ordersIcon from '../../assets/images/icons/orders-icon.svg'
import exploreIcon from '../../assets/images/icons/explore-icon.svg'
import userImage from '../../assets/images/user-image.svg'
import PromoCard from './Shipping-Promo-Card/PromoCard';
const navItems = [
  {
    id: 1,
    title: "Home",
    icon: homeIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Explore",
    icon: exploreIcon,
    path: "/explore",
  },
  {
    id: 3,
    title: "Favourites",
    icon: bookmarkIcon,
    path: "/favourites",
  },
  {
    id: 4,
    title: "Orders",
    icon: ordersIcon,
    path: "/orders",
  },
  {
    id: 5,
    title: "Messages",
    icon: messagesIcon,
    path: "/messages",
  },
  {
    id: 6,
    title: "Settings",
    icon: settingsIcon,
    path: "/settings",
  }
];
const Sidebar = () => {

  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="sidebar">
    <div className="sidebar__top">
      <div className="sidebar__img">
        {/* <img src="" alt="" /> */}
      </div>
      <h3>Nibble</h3>
    </div>
    <div className="sidebar__navigation">
      {
        navItems.map((item) => (
          <Link
          key={item.id}
            to={item.path}
            className={`sidebar__link ${
              pathname === item.path ? "active" : ""
            }`}
          >
            <img src={item.icon} alt="" />
            <h4>{item.title}</h4>
          </Link>
        ))
      }
    </div>
      <PromoCard />
      <div className="sidebar__user">
        <div className="sidebar__user__img">
          {/* <img src={userImage} alt="" /> */}
          </div>
          <div className="sidebar__user__info">
            <h5>John Doe</h5>
            <span className='caption-1'>markclarke@gmail.com</span>
          </div>
      </div>
  </div>
  )
}

export default Sidebar