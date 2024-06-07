import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

import './App.css';

function App() { 
const dispatch = useDispatch()

useEffect(()=>{
  fetchpizza()
}, [])

const fetchpizza = ()=>{
  axios({
    method:'GET',
    url: '/api/pizza'
  })
  .then((response)=>{
    dispatch({
      type: 'GET_PIZZA',
      payload: response.data
    })
    
  })
  .catch((error)=>{
    console.log("failed in GET jsx", error )
  })


}

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Link to="/api/CustomerInfo">orders</Link>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    <PizzaList fetchpizza={fetchpizza}/>
      <Route path="/api/CustomerInfo">
    <CustomerInfo />
    </Route>
    
    

  
    </div>
    </Router>
  );
}

export default App;
