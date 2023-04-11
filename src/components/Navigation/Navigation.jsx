import React,{useRef,useState,useEffect} from 'react'
import './Navigation.scss'
import upDownArrow from '../../assets/images/icons/updown-icon.svg'
import arrowLeft from '../../assets/images/icons/arrow-left-icon.svg'
import bottomIcon from '../../assets/images/icons/bottom-icon.svg'
import locationIcon from '../../assets/images/icons/location-icon.svg'
import shoppingCartIcon from '../../assets/images/icons/shopping-bag-icon.svg'
import couponIcon from '../../assets/images/icons/coupon-icon.svg'
import filterIcon from '../../assets/images/icons/filter-icon.svg'
import cartIcon from '../../assets/images/icons/shopping-cart-icon.svg'
import searchIcon from '../../assets/images/icons/search-icon.svg'
import hamburgerIcon from '../../assets/images/icons/menu-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate(); // react router dom'dan gelen navigate fonksiyonu

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // sayfa ilk yüklendiğinde mobilde mi yoksa desktopta mı olduğumuzu belirlemek için
  const [isClicked, setIsClicked] = useState(false) // hamburger menu açık mı kapalı mı olduğunu belirlemek için
  const searchRef = useRef(null) // search bar ref
  const handleSearch = () => {
    if(!isClicked  ) {
      searchRef.current.classList.toggle('mobile')
      setIsClicked(true)
    } 
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // pencere boyutu değiştiğinde, mobilde mi yoksa desktopta mı olduğumuzu kontrol ediyoruz
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize) // unmount edildiğinde event listener'ı kaldırıyoruz
      
    }
    
  }, [])
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className='navigation__container'>
        <div className="navigation__left">
          <div className='nav__left__item'>
            <img src={locationIcon} alt="" />
            <span className='caption-1'>San Francisco, California</span>
            <div className='arrow__group'>
              <img src={upDownArrow} alt="" />
              <img src={bottomIcon} alt="" />
            </div>
          </div>
          <div className='nav__left__item'>
            <img src={shoppingCartIcon} alt="" />
            <span className='caption-1'>Pick up</span>
            <div className='arrow__group'>
              <img src={upDownArrow} alt="" />
              <img src={bottomIcon} alt="" />
            </div>
          </div>
          <div className='nav__left__item'>
            <img src={couponIcon} alt="" />
            <span className='caption-1'>Best deals</span>
            <div className='arrow__group'>
              <img src={upDownArrow} alt="" />
              <img src={bottomIcon} alt="" />
            </div>
          </div>
        </div>
           {/* hamburger menu */}
          
        {
          isClicked ? <div className='back__item' onClick={handleGoBack}>
              <img src={arrowLeft} alt="" />
          </div> :
          <div className="hamburger__menu">
          <img src={hamburgerIcon} alt="" />
          </div>
        }
        <div className={isMobile ? 'navigation__right full' : 'navigation__right'}>
          {/* search bar */}
       <Link to='/search' className='searchbar'>
         <div className='input__container' 
         ref={searchRef} 
         onClick={() => isMobile && handleSearch()} >
  
         <input type='text' placeholder='Search for anything…' /> 
         <div className='input__icon'>
                  <img src={searchIcon} alt="search-icon" />
              </div>
         </div>
       </Link>
          <div className="product-list-filter-cart">
            <div className={isClicked ? 'product-list-filter filter__active' : 'product-list-filter'}>
              <img src={filterIcon} alt="" />
              </div>
            <div className={isClicked ? 'product-list-cart cart__none' : 'product-list-cart '}>
              <img src={cartIcon} alt="" />
            </div>
          </div>
         
        </div>
    </div>
  )
}

export default Navigation