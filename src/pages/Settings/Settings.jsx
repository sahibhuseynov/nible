import React from 'react'
import './Settings.scss'
import chevronRight from '../../assets/images/icons/chevron-right.svg'
import profileIcon from '../../assets/images/icons/profile-icon.svg'
import bookMarkIcon from '../../assets/images/icons/bookmark-icon2.svg'
import mailIcon from '../../assets/images/icons/mail-icon.svg'
import walletIcon from '../../assets/images/icons/wallet-icon.svg'
import cardIcon from '../../assets/images/icons/card-icon.svg'
import supportIcon from '../../assets/images/icons/support-icon.svg'
import splitIcon from '../../assets/images/icons/split-icon.svg'
import moneyIcon from '../../assets/images/icons/money-icon2.svg'
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
            },
            
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
]
const Settings = () => {
    return (
        <div className='settings__container'>
            <h2>Settings</h2>
            {SettingsItems.map((item, index) => (
                <div className='setting__item' key={index}>
                    <p>{item.title}</p>
                    <div className='sub__items'>
                        {item.items.map((subItem, subIndex) => (
                            <div className='sub__item' key={subIndex}>
                                <div className='info'>
                                <img src={subItem.icon} alt="" />
                                <h4>{subItem.subtitle}</h4>
                                </div>
                                <img src={chevronRight} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      )
}

export default Settings