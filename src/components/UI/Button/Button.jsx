import React from 'react'
import './Button.scss'
const Button = ({size,innerText,onClick}) => {
  return (
    <button
    className={`btn btn-${size}`}
    onClick={onClick}
    >
        {innerText}
    </button>
  )
}

export default Button