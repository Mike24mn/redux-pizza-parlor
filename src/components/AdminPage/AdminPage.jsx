import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import ItemList


//import getOrders()

const AdminPage = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);




    return (
        <>
        <div>
            <h1>Prime Pizza Orders</h1>
            <h2>Admin Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                        <th>Pizza Details</th>
                    </tr>
                </thead>
                <ItemList orders={orders} />
            </table>
        </div>
        </>
    );
};

export default AdminPage;