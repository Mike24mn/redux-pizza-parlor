import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CustomerInfo = () => {
    const [NewName, setNewName] = useState("")
    const [newAddress, SetNewAddress] = useState("")
    const [newCity, setNewCity] = useState("")
    const [newZip, setNewZip] = useState("")
    const [newType, setNewType] = useState(true)

    const history = useHistory()

    const dispatch = useDispatch()

    const payload = [NewName, newAddress, newCity, newZip, newType]

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/orders', payload)

            .then((response) => {
                dispatch({
                    type: 'ADD_INFO',
                    payload: payload
                    
                })
                setNewName("")
                SetNewAddress("")
                setNewCity("")
                setNewZip("")
                setNewType(false)
                history.push('/checkout')
            })
            .catch((error) => {
                console.error("failed in axios POST JSX", error)
            })
    }
    return (
        <>
            <section>
                <h2> Customer Information </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={NewName}
                        onChange={(event) => setNewName(event.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Street"
                        value={newAddress}
                        onChange={(event) => SetNewAddress(event.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="City"
                        value={newCity}
                        onChange={(event) => setNewCity(event.target.value)}
                    />


                    <input
                        type="text"
                        placeholder="Zip"
                        value={newZip}
                        onChange={(event) => setNewZip(event.target.value)}
                    />

                    <button onClick={() => setNewType(!newType)}>
                        {newType ? "Deliver" : "Pickup"}
                    </button>


                    <button type="submit ">Submit</button>

                  </form>

                    
                   
                    
            </section>




        </>



    )

}
export default CustomerInfo