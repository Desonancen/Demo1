class Product {
  protected _id: number;
  protected _provider: string;
  protected _name: string;
  private _avaliable: number;
  private _price: number;
  private _details: string;
  constructor(
    id: number,
    provider: string,
    name: string,
    avaliable: number,
    price: number,
    details: string
  ) {
    this._id = id;
    this._provider = provider;
    this._name = name;
    this._avaliable = avaliable;
    this._price = price;
    this._details = details;
  }
}
