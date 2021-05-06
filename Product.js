var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Product = /** @class */ (function () {
  function Product(id, name, provider, price) {
    this.id = id;
    this.name = name;
    this.provider = provider;
    this.price = price;
  }
  return Product;
})();
var Item = /** @class */ (function (_super) {
  __extends(Item, _super);
  function Item(id, name, provider, price, amount, created, details) {
    var _this = _super.call(this, id, name, provider, price) || this;
    _this.amount = amount;
    _this.created = created;
    _this.details = details;
    return _this;
  }
  return Item;
})(Product);
