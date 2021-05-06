enum OrderStatus {
  New,
  Hold,
  Sent,
  Delivered,
  Closed,
}

class Order {
  private _id: number;
  private _name: string;
  private _phone: number;
  private _status: OrderStatus;
  private _dateOfOrder: Date;
  private _deliveryAdress: string;
  private _totalPrice: number;
  private _details: string;
  private _productAmount: number;
  //private _paid: boolean;

  constructor(
    id: number,
    name: string,
    phone: number,
    totalPrice: number,
    details: string,
    productAmount: number
  ) {
    this._id = id;
    this._name = name;
    this._phone = phone;
    this._totalPrice = totalPrice;
    this._details = details;
    this._productAmount = productAmount;
  }
}
