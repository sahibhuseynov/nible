import React from 'react'
import './CategoryCard.scss'
import { Link } from 'react-router-dom';
const CategoryCard = ({title,pathName,options,icon,color}) => {
  const cardStyle = {
    background: color, // Arka plan rengini belirtmek için color prop'unu kullanın
  };
  return (
    <Link to={pathName}>
      <div className='category__card'>
          <div className='category__card__image' style={cardStyle}>
              <img src={icon} alt='icon' />
          </div>
          <h4>{title}</h4>
          <p className='caption-1'>
          {options}
          </p>
      </div>
    </Link>
  )
}

export default CategoryCard