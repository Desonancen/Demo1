const db = require ("./dbConnector");

class ProductsQueries {

    createProductDb = async (rest) => {  return await db.query(
        "INSERT INTO product (provider, name, price, details, avaliable, image_url) values ($1, $2, $3, $4, $5, $6) RETURNING *",
        [rest.provider, rest.name, rest.price, rest.details, rest.avaliable]
      ) 
    };

    getProductsDb = () => {
        return db.query("SELECT * FROM product")
    };

    getOneProductDb = (id) => {
        return db.query("SELECT * FROM product where id = $1", [id])
    };

    editProductDb = async (rest) => { return await db.query(
            "UPDATE product set name = $2, price = $3, details = $4, avaliable = $5 where id = $1 RETURNING *",
            [rest.id, rest.name, rest.price, rest.details, rest.avaliable ]
          )
    };

    deleteProductDb = (id) => {
        return db.query("DELETE FROM product where id = $1", [id])
    }

}

module.exports = new ProductsQueries();