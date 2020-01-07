import Order from "./Order";

const orders = [
    new Order('奶茶', 40, '半糖去冰'),
    new Order('紅茶',30, '半糖少冰'),
    new Order('大杯紅茶',50),
    new Order('多多綠奶茶', 55),
    new Order('珍珠奶茶', 60, '不加珍珠')
];

let changeHandler = null;

/**
 *
 * @return {Array<Order>}
 */
const getOrders = () => {
    return orders;
};

/**
 *
 * @param id
 * @return {Order}
 */
const getOrder = (id) => {
    return orders[id - 1];
};

/**
 *
 * @param {string} name
 * @param {number} price
 * @param {?string} notes
 * @return {boolean}
 */
const createOrder = (name, price, notes = null) => {
    try {
        orders.push(new Order(name, price, notes));
        dispatchChange();
        return true;
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param id
 * @param name
 * @param price
 * @param notes
 * @return {boolean}
 */
const updateOrder = (id, name, price, notes = null) => {
    try {
        orders[id - 1] = new Order(name, price, notes);
        dispatchChange();
        return true;
    } catch (e) {
        throw e;
    }
};

/**
 *
 * @param id
 * @return {boolean}
 */
const deleteOrder = (id) => {
    orders.splice(id - 1, 1);
    dispatchChange();
    return true;
};

/**
 *
 * @param handler
 */
const subscribe = (handler) => {
    if (typeof handler === 'function') {
        changeHandler = handler;
        dispatchChange();
        return true;
    } else {
        return false;
    }
};

/**
 *
 */
const dispatchChange = () => {
    console.log('Dispatching change.');
    changeHandler(orders);
};

export default {getOrders, getOrder, createOrder, updateOrder, deleteOrder, subscribe};