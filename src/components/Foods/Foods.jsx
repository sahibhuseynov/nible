import React from 'react'
import './Foods.scss'
import RestaurantCard from './../UI/RestaurantCard/RestaurantCard';
//*
import { useGetPizzaQuery } from '../../api/api';

const Foods = () => {
  const { data, error, isLoading } = useGetPizzaQuery(1);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const slicedData = data.slice(0,6); // İlk 6 veriyi al
  return (
    <div className='foods__container'>
         {slicedData.map((item) => (

           <RestaurantCard key={item.id} data={item} 

           />

       ))}
    </div>
  )
         }
}

export default Foods