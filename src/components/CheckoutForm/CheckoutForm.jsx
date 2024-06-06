import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import axios from 'axios'
import {
    HashRouter as Router,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";

  // WILL NEED TO IMPORT OTHER PAGES HERE AS WELL
  // IF I WANT TO ROUTE TO THEM  ^^^

// the .then dispatch order that pushes the checkout
// order information to our server will need an
// alert("Order Submitted") message, or something like
// similar

// WILL NEED TO DESTRUCTURE AXIOS GET FUNCTION BELOW
// IN CURLY BRACES OF CHECKOUTFORM
// OR SIMPLY DEFINE IT HERE
function CheckoutForm({  }) {

/* // Commented out, would only need if updating local
      state before pushing to global/redux, like a form 

  const [pizza, setPizza] = useState('');

*/

// Dispatch is our action sent to the reducer
// which communicated with the store 
// to manipulate state

  const dispatch = useDispatch();

// pizzaInfo targets information from our redux stored state

  const pizzaInfo = useSelector((state) => state.someReducer);

  // pizzaList goes to the store to grab data from someReducer

  const pizzaList = useSelector(store => store.someReducer)

  // ! Intialize history as a variable

  const history = useHistory()

  // get Pizza data from server on load
  useEffect(() => {
    console.log("in useEffect");
    refreshPizza();
  }, []);

  const refreshPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        // response.data is our incoming information
        // should be pizza array
        console.log(response.data);
        dispatch({ type: "SET_PIZZA_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };

// pizzaList goes to the store to grab data from someReducer

  const handleClick = () => {
    alert("About to go to select pizza page!!!")
    // change location url if needed!!! depending on what we
    // name selectpizza page url
    history.push("/selectpizza")
  }

  // need a function for price total

function pizzaTotal() {
    // .map or a for each that loops over
    // pizza.price values in the store
}

  // need to grab orders from an axios GET request
  // this will grab data from the orders table
  // within our postico database

  // need to set cart to empty via a function 
  // or through setting a reducer to an
  // empty string ("")


  
  // need axios POST request that dispatches to our store
  // so that orders get stored on the server only!!!

  // STUFF BELOW WILL GO INTO THE RETURN STATEMENT HTML
  // BELOW

  // want to access orders.customer_name
  // orders.street_address
  // orders.city
  // orders.zip 

  // These above will be in the top left corner of the screen

  // then need a table for pizza.name
  //  and pizza.price 

  return (
    <div>
      <h1>Step 3: Checkout</h1>
      <button onClick={() => handleClick()}>Checkout</button>
    </div>
  );
}

export default CheckoutForm;