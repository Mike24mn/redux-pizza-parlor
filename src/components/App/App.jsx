import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PizzaList from "../PizzaList/PizzaList";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./App.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import store from "../../redux/store";

function App({Pizzaparty}) {

  const history = useHistory();
  const dispatch = useDispatch();

  const pizzaList = useSelector(store => store.Pizzaparty)

  const [price, setPrice] = useState([]);



  useEffect(() => {
    fetchpizza();
  }, []);

  const fetchpizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        dispatch({
          type: "GET_PIZZA",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("failed in GET jsx", error);
      });
  };

  /*

const handleNext = () => {
  alert("About to go to customer info page!!!")
  // change location url if needed!!! depending on what we
  // name selectpizza page url
  history.push("/CustomerInfo")
}
  

  function pizzaTotal() {
    console.log("in pizzaTotal");
  }

  pizzaTotal()
*/


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <h1>
        {price.map((pizza) => (
          <h2 key={pizza.id}>
            <h3>{pizza.price}</h3>
          </h2>
        ))}
      </h1>
      <img src="images/pizza_photo.png" />
      <p>Welcome, Pizza is greatness.</p>
      <Router>
        <nav>
          <Link to="/selectpizza">
            <button>Build Pizza</button>
          </Link>
          <Link to="/CustomerInfo">
            <button>Delivery Details</button>
          </Link>
          <Link to="/CheckoutForm">
            <button>Checkout</button>
          </Link>
        </nav>
        <Route exact path="/CustomerInfo">
        <CustomerInfo />
       </Route>
       <Route exact path="/CheckoutForm">
        <CheckoutForm />
       </Route>
       <Route exact path="/selectpizza">
       <PizzaList fetchpizza={fetchpizza} />
       </Route>
      </Router>
    </div>
  );
}

export default App;
