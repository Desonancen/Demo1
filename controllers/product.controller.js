const db = require("../db");

class productController {
  async createProduct(req, res) {
    const { id, provider, name, price } = req.body;
    const newItem = await db.query(
      "INSERT INTO product (id, provider, name, price) values ($1, $2, $3, $4) RETURNING *",
      [id, provider, name, price]
    );
    res.json(newItem.rows[0]);
  }

  async getProducts(req, res) {
    const products = await db.query("SELECT * FROM product");
    res.json(products.rows);
  }

  async getOneProduct(req, res) {
    const id = req.params.id;
    const product = await db.query("SELECT * FROM product where id = $1", [id]);
    res.json(product.rows[0]);
  }

  async editProduct(req, res) {
    const { id, name, price } = req.body;
    const product = await db.query(
      "UPDATE product set name = $1, price = $2 where id = $3 RETURNING *",
      [name, price, id]
    );
    res.json(product.rows[0]);
  }

  async deleteProduct(req, res) {
    const id = req.params.id;
    const product = await db.query("DELETE FROM product where id = $1", [id]);
    res.json(product.rows[0]);
  }
}

module.exports = new productController();
