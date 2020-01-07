import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import OrdersRepository from "../models/OrdersRepository";

const OrderEditor = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [notes, setNotes] = useState('');

    const submit = () => {
        try {
            if (props.orderId > 0) {
                OrdersRepository.updateOrder(props.orderId, name, price, notes);
            } else {
                OrdersRepository.createOrder(name, price, notes);
            }
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        if (props.orderId > 0) {
            const order = OrdersRepository.getOrder(props.orderId);
            setName(order.name);
            setPrice(order.price);
            setNotes(order.notes || '');
        }
    }, [props.orderId]);

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <ul>
                    <li>
                        <label htmlFor="order-name">品名：</label>
                        <input type="text" name="order-name" value={name} onChange={e => setName(e.target.value)} required />
                    </li>
                    <li>
                        <label htmlFor="order-price">價格：</label>
                        <input type="number" name="order-price" value={price} onChange={e => setPrice(parseInt(e.target.value))} required />
                    </li>
                    <li>
                        <label htmlFor="order-notes">備註：</label>
                        <textarea name="order-notes" value={notes} onChange={e => setNotes(e.target.value)} />
                    </li>
                </ul>
                <div>
                    <button type="button" onClick={() => submit()}>{(props.orderId > 0) ? '儲存' : '新增'}</button>
                </div>
            </form>
        </div>
    );
};

OrderEditor.propTypes = {
    orderId: PropTypes.number.isRequired
};

export default OrderEditor;