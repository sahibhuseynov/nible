import React from 'react'
import FoodCard from '../UI/FoodCard/FoodCard';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/slice/productModal';
import ProductPreviewModal from '../HomeCard/ProductPreviewModal/ProductPreviewModal';

const ExploreCards = () => {
  const dispatch = useDispatch();
  const slicedData = useSelector((state) => state.products.slice(0, 6)); // İlk 6 ürünü al
  const { isOpen } = useSelector((state) => state.productModal);
   // Modal açma fonksiyonu
   const openModalHandler = (itemId) => {
    dispatch(openModal(itemId));
  };
  return (
    <div className='foodCard__container'>
        {slicedData.map((item) => (
           
           <FoodCard key={item.id} data={item} 
           onClick={() => openModalHandler(item.id)}
           />
         
       ))}
        {isOpen && (
          <div className={`selected-component ${isOpen ? "open" : ""}`}>
            <ProductPreviewModal  />
          </div>
        )}
    </div>
  )
    }


export default ExploreCards