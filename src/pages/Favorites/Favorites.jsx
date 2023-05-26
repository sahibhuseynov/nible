
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FoodCard from './../../components/UI/FoodCard/FoodCard';
import { openModal } from '../../redux/slice/productModal';
import ProductPreviewModal from './../../components/HomeCard/ProductPreviewModal/ProductPreviewModal';

const FavoritesPage = () => {
    const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const products = useSelector((state) => state.products);
  const { isOpen } = useSelector((state) => state.productModal);
// Modal açma fonksiyonu
const openModalHandler = (itemId) => {
    dispatch(openModal(itemId));
  };
  // Favori ürünleri filtreleyin
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <>
        {
            favoriteProducts.length > 0 ? (
                <div className='foodCard__container'>
      
      {favoriteProducts.map((item) => (
        <FoodCard key={item.id} data={item} 
        onClick={() => openModalHandler(item.id)} />
      ))}
      {isOpen && (
          <div className={`selected-component ${isOpen ? "open" : ""}`}>
            <ProductPreviewModal  />
          </div>
        )}
    </div>
            ) : (
               <div className='no__favorites'>
                     <h1>There is no favorite product</h1>
               </div>
            )
        }
    </>
  );
};

export default FavoritesPage;
