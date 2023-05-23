import React from 'react'
import { useGetPizzaQuery } from '../../api/api'
import FoodCard from '../UI/FoodCard/FoodCard';

const ExploreCards = () => {
    const { data, error, isLoading } = useGetPizzaQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const slicedData = data.slice(0,6); // İlk 6 veriyi al
    console.log(slicedData);
  return (
    <div className='foodCard__container'>
        {slicedData.map((item) => (
           
           <FoodCard key={item.id} data={item} />
         
       ))}
    </div>
  )
    }}

export default ExploreCards