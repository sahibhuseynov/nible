import React from 'react';
import './Foods.scss';
import RestaurantCard from './../UI/RestaurantCard/RestaurantCard';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/slice/productModal';
import ProductPreviewModal from './../HomeCard/ProductPreviewModal/ProductPreviewModal';

const Foods = () => {
  const dispatch = useDispatch();
  const slicedData = useSelector((state) => state.products.slice(0, 6)); // İlk 6 ürünü al
  const { isOpen } = useSelector((state) => state.productModal);

  // Modal açma fonksiyonu
  const openModalHandler = (itemId) => {
    dispatch(openModal(itemId));
  };

  

  return (
    <div className='foods__container'>
      {slicedData.map((item) => (
        <RestaurantCard key={item.id} data={item} onClick={() => openModalHandler(item.id)} />
      ))}
      {/* Modal açık olduğunda, ProductPreviewModal bileşenini render et */}
      {isOpen && (
          <div className={`selected-component ${isOpen ? 'open' : ''}`}>
            <ProductPreviewModal />
          </div>
        )}
    </div>
  );
};

export default Foods;
