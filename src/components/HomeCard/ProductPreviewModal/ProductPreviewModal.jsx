import React from 'react'
import './ProductPreviewModal.scss'
import { useSelector,useDispatch} from 'react-redux'
import { addToFavorites,removeFromFavorites } from '../../../redux/slice/favoritesSlice'
import { ToastContainer, toast } from 'react-toastify';
import heartIcon from '../../../assets/images/icons/heart-icon.svg'
import closeIcon from '../../../assets/images/icons/close-icon16.svg'
import { closeModal } from '../../../redux/slice/productModal';
import minusIcon from '../../../assets/images/icons/minus-icon.svg'
import plusIcon from '../../../assets/images/icons/plus-icon.svg'
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
            <div className={`favorite__btn ${isFavorite ? 'active' : ''}`}  onClick={toggleFavorite}>
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
              {selectedProduct.title.slice(0, 25)}
            </h2>
            <span>
            Served with basmati rice, brown rice or bulgur pilaf, skewered with grilled vegetables
            </span>
            </div>
            <div className="choice-required">
              <h4>Rice choice</h4>
              <div className='required__btn'>
                  <span className='caption-2'>Required</span>
              </div>
            </div>
            <div className="check__container">
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Brown rice</span>
  </div>
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Basmati rice</span>
  </div>
  <div className="check__content">
    <label htmlFor="cbx" className="cntr">
      <input type="checkbox" id="cbx" className="hidden-xs-up" />
      <span className="cbx"></span>
    </label>
    <span>Bulgur Pilaf</span>
  </div>
 
</div>
    <div className="add__cart">
      <div className="product__quantity">
        <button className="minus__btn">
          <img src={minusIcon} alt="" />
        </button>
        <h3>1</h3>
        <button className="plus__btn">
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <div className="add__cart__btn">
        <h3 >Add ($15,00)</h3>
      </div>
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