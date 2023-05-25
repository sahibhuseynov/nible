import React from 'react'
import './ProductPreviewModal.scss'
import { useSelector,useDispatch} from 'react-redux'
import { addToFavorites,removeFromFavorites } from '../../../redux/slice/favoritesSlice'
import { ToastContainer, toast } from 'react-toastify';
import heartIcon from '../../../assets/images/icons/heart-icon.svg'
import closeIcon from '../../../assets/images/icons/close-icon16.svg'
import { closeModal } from '../../../redux/slice/productModal';
const ProductPreviewModal = () => {
  const dispatch = useDispatch();
  // Modal kapatma fonksiyonu
  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  const { selectedItemId} = useSelector((state) => state.productModal);
  const products = useSelector((state) => state.products); // Redux store'daki ürün verilerini al
  // Seçili ürünü bul
  const selectedProduct = products.find((product) => product.id === selectedItemId);
  if (!selectedProduct) {
    return null; // Seçili ürün bulunamadıysa modalı gösterme
  }
  // Redux store'daki favori ürünlerin id'lerini al
  const isFavorite = useSelector((state) => state.favorites.includes(selectedItemId));
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(selectedItemId));
      toast.info('Removed from favorites');
    } else {
      dispatch(addToFavorites(selectedItemId));
      toast.success('Added to favorites');
    }
  };
   // Modal kapatma fonksiyonu
   
  return (
    <div className='product__container'>
        <div className='product__header'>
            <div className="favorite__btn"  onClick={toggleFavorite}>
                <img src={heartIcon} alt="" />
            </div>
            <div className="close__btn" onClick={closeModalHandler}>
                <img src={closeIcon} alt="" />
            </div>

        </div>
      <div className='product__image'>
        <img src={selectedProduct.image} alt="" />
        </div>
        <div className='product__content'>
          <div className='product__content__top'>
            <h2>
              {selectedProduct.title}
            </h2>
            <span>
              {selectedProduct.description}
            </span>
            </div>
        </div>
        <ToastContainer 
        theme="dark"
        autoClose={2000}

        />

    </div>
  )
}
export default ProductPreviewModal