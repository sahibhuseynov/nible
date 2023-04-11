import React from 'react'
import './Button.scss'
const Button = ({size,innerText,onClick,icon}) => {
  return (
    <button
    className={`btn btn-${size}`}
    onClick={onClick}
    >
        {innerText}
        <img src={icon} alt="" />
    </button>
  )
}

export default Button