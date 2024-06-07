import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const Pizzaparty = (state = [], action) => {
  if (action.type === 'GET_PIZZA'){
    return action.payload
  }
return state;
} 

const line =(state=[], action) =>{
  if (action.type === 'ADD_PIZZA'){
    return [...state,action.payload]
  }
  return state


}

const customer = (state=[], action)=>{
if(action.type === 'ADD_INFO'){
  return [...state, action.payload]
}
return state 
}

const store = createStore(
  combineReducers({
    Pizzaparty, // 👈 Be sure to replace this, too!
    line,
    customer,
  }),
  applyMiddleware(logger),
);


export default store;
