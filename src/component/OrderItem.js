import React from "react";
import PropTypes from "prop-types";

const OrderItem = (props) => {
    return (
        <div>
            <div>
                <div>
                    <span>{props.name}</span>
                    <span>${props.price}</span>
                </div>
                <div>
                    {props.notes}
                </div>
            </div>
            <div>
                <button onClick={() => props.editAction(props.orderId)}>編輯</button>
                <button onClick={() => props.deleteAction(props.orderId)}>刪除</button>
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