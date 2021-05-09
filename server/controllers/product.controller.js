import db from "../db/dbConnector";

class productController {
  async createProduct(req, res) {
    const { id, provider, name, price, details, avaliable } = req.body;
    const newItem = await db.query(
      "INSERT INTO product (id, provider, name, price, details, avaliable) values ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id, provider, name, price, details, avaliable]
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
    const {name, price, details, avaliable} = req.body;
    const id = req.params.id;
    const product = await db.query(
      "UPDATE product set name = $2, price = $3, details = $4, avaliable = $5 where id = $1 RETURNING *",
      [id, name, price, details, avaliable ]
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
