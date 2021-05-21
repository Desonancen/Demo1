class Product {
  protected _id: number;
  protected _provider: string;
  protected _name: string;
  protected _avaliable: boolean;
  protected _price: number;
  protected _details: string;

  constructor(
    provider: string,
    name: string,
    avaliable: boolean,
    price: number,
    details: string
  ) {
    this._provider = provider;
    this._name = name;
    this._avaliable = avaliable;
    this._price = price;
    this._details = details;
  }
}
