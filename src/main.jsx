import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import  store from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}><App /></Provider>
  
)
