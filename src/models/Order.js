class Order {
    /**
     * constructor of Order class.
     * @param name
     * @param price
     * @param notes
     */
    constructor(name, price, notes = null) {
        if (name === '') throw new Error('品名不可空白。');
        if (Number.isNaN(price)) throw new Error('價格必須為數字。');
        if (price < 0) throw new Error('價格必須大於 0。');

        this._name = name;
        this._price = price;
        this._notes = notes;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get notes() {
        return this._notes;
    }

    set notes(value) {
        this._notes = value;
    }
}

export default Order;