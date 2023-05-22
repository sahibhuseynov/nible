import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/settingsModal/settingsModal';
import './Settings.scss';
import chevronRight from '../../assets/images/icons/chevron-right.svg';
import profileIcon from '../../assets/images/icons/profile-icon.svg';
import bookMarkIcon from '../../assets/images/icons/bookmark-icon2.svg';
import mailIcon from '../../assets/images/icons/mail-icon.svg';
import walletIcon from '../../assets/images/icons/wallet-icon.svg';
import cardIcon from '../../assets/images/icons/card-icon.svg';
import supportIcon from '../../assets/images/icons/support-icon.svg';
import splitIcon from '../../assets/images/icons/split-icon.svg';
import moneyIcon from '../../assets/images/icons/money-icon2.svg';
import PersonalInformation from '../../components/UI/SettingsModals/PersonalInformation/PersonalInformation';
import SavedAddresses from '../../components/UI/SettingsModals/SavedAdress/SavedAdress';
import MarketingPre from '../../components/UI/SettingsModals/MarketingPre/MarketingPre';
// Diğer bileşenleri burada import edin

const SettingsItems = [
  {
    title: 'General',
    items: [
      {
        icon: profileIcon,
        subtitle: 'Personal information'
      },
      {
        icon: bookMarkIcon,
        subtitle: 'Saved addresses'
      },
      {
        icon: mailIcon,
        subtitle: 'Marketing preferences'
      }
    ]
  },
  {
    title: 'Payments',
    items: [
      {
        icon: walletIcon,
        subtitle: 'Payment methods'
      },
      {
        icon: cardIcon,
        subtitle: 'My cards'
      }
    ]
  },
  {
    title: 'Other',
    items: [
      {
        icon: supportIcon,
        subtitle: 'Support'
      },
      {
        icon: splitIcon,
        subtitle: 'Invite a friend'
      },
      {
        icon: moneyIcon,
        subtitle: 'Currency'
      }
    ]
  }
];

const componentMap = {
  'Personal information': PersonalInformation,
  'Saved addresses': SavedAddresses,
  'Marketing preferences': MarketingPre
  // Diğer bileşenleri burada ekleyin
};

const Settings = () => {
  const dispatch = useDispatch();
  const modalComponent = useSelector((state) => state.settings.modalComponent);
  const showModal = modalComponent !== null;
  const RenderedModalComponent = componentMap[modalComponent];
  const renderedModalComponent = RenderedModalComponent ? <RenderedModalComponent /> : null;

  const handleItemClick = (componentName) => {
    dispatch(openModal(componentName));
  };

  return (
    <div className="settings__container">
      <h2>Settings</h2>
      {SettingsItems.map((item, index) => (
        <div className="setting__item" key={index}>
          <p>{item.title}</p>
          <div className="sub__items">
            {item.items.map((subItem, subIndex) => (
              <div className="sub__item" key={subIndex} onClick={() => handleItemClick(subItem.subtitle)}>
                <div className="info">
                  <img src={subItem.icon} alt="" />
                  <h4>{subItem.subtitle}</h4>
                </div>
                <img src={chevronRight} alt="" />
              </div>
            ))}
          </div>
        </div>
      ))}
      {showModal && (
        <div className={`selected-component ${showModal ? 'open' : ''}`}>
          {renderedModalComponent}
        </div>
      )}
    </div>
  );
};

export default Settings;
