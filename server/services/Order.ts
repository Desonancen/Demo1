class Order {
  protected _id: number;
  protected _name: string;
  protected _phone: number;
  protected _createdDate: Date;
  protected _deliveryAdress: string;
  protected _totalPrice: number;
  protected _comment: string;
  protected _productAmount: number;
  protected _paid: boolean;

  constructor(
    id: number,
    name: string,
    phone: number,
    totalPrice: number,
    comment: string,
    productAmount: number
  ) {
    this._id = id;
    this._name = name;
    this._phone = phone;
    this._totalPrice = totalPrice;
    this._comment = comment;
    this._productAmount = productAmount;
  }
}
