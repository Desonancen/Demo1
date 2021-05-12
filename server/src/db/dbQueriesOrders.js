const db = require ("./dbConnector");

class OrdersQueries {

    createOrderDb = async(rest) => { return await db.query(
        "INSERT INTO orders (id, name, created_date, delivery_address, total_price, comment, product_amount, paid, phone, product_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  RETURNING *",
        [rest.id, rest.name, rest.created_date, rest.delivery_address, rest.total_price, rest.comment, rest.product_amount, rest.paid, rest.phone, rest.product_id]
        )
    };

    getOrdersDb = async () => {
        return await db.query("SELECT * FROM orders")
    };

    getOneOrderDb = (id) => {
        return db.query("SELECT * FROM orders where id = $1", [id])
    };

    editOrderDb = async (rest) => { return await db.query(
        "UPDATE orders set delivery_address = $1, comment = $2 where id = $3 RETURNING *",
        [rest.delivery_address, rest.comment, rest.id]
      )
    };

    deleteOrderDb = (id) => {
        return db.query("DELETE FROM orders where id = $1", [id])
    }

}

module.exports = new OrdersQueries();