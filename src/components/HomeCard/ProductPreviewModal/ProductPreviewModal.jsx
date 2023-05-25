import React from 'react'
import './ProductPreviewModal.scss'
import { useGetPizzaByIdQuery } from '../../../api/api';
import heartIcon from '../../../assets/images/icons/heart-icon.svg'
import closeIcon from '../../../assets/images/icons/close-icon16.svg'
const ProductPreviewModal = ({itemId, onClose }) => {
  const { data, error, isLoading } = useGetPizzaByIdQuery(itemId);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    console.log(data);

  return (
    <div className='product__container'>
        <div className='product__header'>
            <div className="favorite__btn">
                <img src={heartIcon} alt="" />
            </div>
            <div className="close__btn" onClick={onClose}>
                <img src={closeIcon} alt="" />
            </div>

        </div>
      <div className='product__image'>
        <img src={data.image} alt="" />
        </div>
        <div className='product__content'>
          <div className='product__content__top'>
            <h2>
              {data.title}
            </h2>
            <span>
              {data.description.slice(0, 100)}
            </span>
            </div>
        </div>
    </div>
  )
}
}
export default ProductPreviewModal