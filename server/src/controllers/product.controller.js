const ProductsQueries = require ("../db/dbQueriesProducts");

class productController {
  async createProduct(req, res) {
    try {
    const newItem = await ProductsQueries.createProductDb(req.body);
    res.json(newItem.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
  //throw new Error('smth wrong with delete order')
    }
  }

  async getProducts(req, res) {
    try {
    const products = await ProductsQueries.getProductsDb();
    res.json(products.rows);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
  //throw new Error('smth wrong with delete order')
    }
  }

  async getOneProduct(req, res) {
    const id = req.params.id;
    try {
    const product = await ProductsQueries.getOneProductDb(id);
    res.json(product.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
  //throw new Error('smth wrong with delete order')
    }
  }

  async editProduct(req, res) {
    try {
    const product = await ProductsQueries.editProductDb(req.body);
    res.json(product.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
  //throw new Error('smth wrong with delete order')
    }
  }

  async deleteProduct(req, res) {
    const id = req.params.id;
    try {
    const product = await ProductsQueries.deleteProductDb(id);
    res.json(product.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
  //throw new Error('smth wrong with delete order')
    }
  }
}

module.exports = new productController();
