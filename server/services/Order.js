var Order = /** @class */ (function () {
    function Order(id, name, phone, totalPrice, comment, productAmount) {
        this._id = id;
        this._name = name;
        this._phone = phone;
        this._totalPrice = totalPrice;
        this._comment = comment;
        this._productAmount = productAmount;
    }
    return Order;
}());
