import React from 'react'
import './HomeCards.scss'
import { useGetPizzaQuery } from '../../api/api'
import HomeCard from './../UI/FoodCard/HomeCard';

const HomeCards = () => {
    const { data, error, isLoading } = useGetPizzaQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const slicedData = data.slice(0,3); // İlk 6 veriyi al
    console.log(slicedData);
  return (
    <div className='foodCard__conatiner'>
        {slicedData.map((item) => (
           
           <HomeCard key={item.id} data={item} />
         
       ))}
    </div>
  )
    }}

export default HomeCards