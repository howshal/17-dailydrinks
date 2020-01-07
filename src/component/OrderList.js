import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import OrdersRepository from "../models/OrdersRepository";
import OrderItem from "./OrderItem";

const OrderList = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const handleOrderChange = (newOrders) => {
            setOrders([...newOrders]);
        };

        OrdersRepository.subscribe(handleOrderChange);
    }, []);

    const deleteAction = (orderId) => {
        props.editHandler(-1);
        OrdersRepository.deleteOrder(orderId);
    };

    return (
        <ol>
            {
                orders.map((order, index) => (
                    <li key={index}>
                        <OrderItem orderId={index + 1} name={order.name} price={order.price} notes={order.notes} editAction={props.editHandler} deleteAction={deleteAction} />
                    </li>
                ))
            }
        </ol>
    );
};

OrderList.propTypes = {
    editHandler: PropTypes.func.isRequired,
};

export default OrderList;