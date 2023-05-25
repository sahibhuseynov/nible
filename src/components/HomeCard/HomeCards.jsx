import React,{useState}from 'react'
import './HomeCards.scss'
import { useGetPizzaQuery } from '../../api/api'
import HomeCard from './../UI/FoodCard/HomeCard';
import ProductPreviewModal from './ProductPreviewModal/ProductPreviewModal';

const HomeCards = () => {
    const { data, error, isLoading } = useGetPizzaQuery(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const openModal = (itemId) => {
      setSelectedItemId(itemId);
      setIsOpen(true);
    };
    const closeModal = () => {
      setSelectedItemId(null);
      setIsOpen(false);
    };  
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
    <div className='foodCard__container'>
        {slicedData.map((item) => (
           
           <HomeCard key={item.id} data={item} 
           onClick={() => openModal(item.id)}
           />
         
       ))}
       {isOpen && (
        <div className={`selected-component ${isOpen ? 'open' : ''}`}>
          {<ProductPreviewModal itemId={selectedItemId} onClose={closeModal} />}
        </div>
      )}
    </div>
  )
    }}

    
export default HomeCards