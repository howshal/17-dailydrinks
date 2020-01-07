import React from "react";
import PropTypes from "prop-types";

import {nl2br} from "../utility/TextFormatter";

const OrderItem = (props) => {
    return (
        <div className="order-item">
            <div className="order-item__content">
                <div>
                    <span>{props.name}</span> <span>${props.price}</span>
                </div>
                {(props.notes) ? (
                    <div className="order-item__notes" dangerouslySetInnerHTML={{__html: nl2br(props.notes)}} />
                ) : ''}
            </div>
            <div className="order-item__actions">
                <button className="item-button item-button--action" onClick={() => props.editAction(props.orderId)}>編輯</button>
                <button className="item-button item-button--warning" onClick={() => props.deleteAction(props.orderId)}>刪除</button>
            </div>
        </div>
    )
};

OrderItem.propTypes = {
    orderId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    notes: PropTypes.string,
    deleteAction: PropTypes.func.isRequired,
    editAction: PropTypes.func.isRequired
};

export default OrderItem;