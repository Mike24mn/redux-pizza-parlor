

import React from 'react';

const ItemList = ({ orders }) => {
    return (
        <tbody>
            {orders.map(order => (
                <tr key={order.id}>
                    <td>{order.customer_name}</td>
                    <td>{order.time}</td>
                    <td>{order.type}</td>
                    <td>{order.total}</td>
                    <td>{order.pizza_name}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default ItemList;