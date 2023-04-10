import React from 'react'
import './Sidebar.scss'
import { Link, useLocation } from "react-router-dom";
import homeIcon from '../../assets/images/icons/home-icon.svg'
import bookmarkIcon from '../../assets/images/icons/bookmark-icon.svg'
import settingsIcon from '../../assets/images/icons/settings-icon.svg'
import messagesIcon from '../../assets/images/icons/messages-icon.svg'
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
    icon: homeIcon,
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
    icon: homeIcon,
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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
          alt=""
        />
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
            <span>{item.title}</span>
          </Link>
        ))
      }
    </div>
      <PromoCard />
  </div>
  )
}

export default Sidebar