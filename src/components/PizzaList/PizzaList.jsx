import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PizzaList = ({fetchpizza})=>{
const pizza = useSelector(store => store.Pizzaparty)
const line = useSelector(store=>store.line)
const dispatch = useDispatch()

const addPizza = (pizzaId)=>{
   

    dispatch({
        type: "ADD_PIZZA",
        payload: pizzaId
    })

}

return(
        <>
        <div>
        <table>
          <tbody>
         
            {pizza.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image_path} alt={item.name} style={{ width: "100px", height: "100px" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => addPizza(item.id)}>ADD PIZZA</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>

)
}

export default PizzaList