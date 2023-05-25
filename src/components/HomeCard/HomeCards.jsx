import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./HomeCards.scss";
import { useGetPizzaQuery } from "../../api/api";
import HomeCard from "./../UI/FoodCard/HomeCard";
import ProductPreviewModal from "./ProductPreviewModal/ProductPreviewModal";
import { openModal, closeModal } from "../../redux/slice/productModal";
import { setData } from "../../redux/slice/productSlice";

const HomeCards = () => {
  const { data, error, isLoading } = useGetPizzaQuery(1);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.productModal);
  // Modal açma fonksiyonu
  const openModalHandler = (itemId) => {
    dispatch(openModal(itemId));
  };

  
  useEffect(() => {
    if (data) {
      dispatch(setData(data)); // Veriyi Redux Store'da güncellemek için setData eylemini çağırın
    }
  }, [data, dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    const slicedData = data.slice(0, 3);
    
    return (
      <div className="foodCard__container">
        {/* Ürün kartlarını ekrana render et */}
        {slicedData.map((item) => (
          <HomeCard
            key={item.id}
            data={item}
            onClick={() => openModalHandler(item.id)}
          />
        ))}
        {/* Modal açık olduğunda, ProductPreviewModal bileşenini render et */}
        {isOpen && (
          <div className={`selected-component ${isOpen ? "open" : ""}`}>
            <ProductPreviewModal  />
          </div>
        )}
      </div>
    );
  }
};

export default HomeCards;
