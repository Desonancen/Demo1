const OrdersQueries = require ("../db/dbQueriesOrders");

class orderController {
  async createOrder (req, res) { 
   try {
    const newOrder = await OrdersQueries.createOrderDb(req.body); 
    res.json(newOrder.rows[0]);
    } catch (err) {
      throw new Error('smth wrong with create order')
      }
  }
  
  async getOrders(req, res) {   
  try {
    const orders = await OrdersQueries.getOrdersDb();
    res.json(orders.rows);
  } catch (err) {
    throw new Error('smth wrong with get orders')
    }
  }

  async getOneOrder(req, res) {     
    const id = req.params.id;
    try {
    const order = await OrdersQueries.getOneOrderDb(id);
    res.json(order.rows[0]);
  } catch (err) {
    throw new Error('smth wrong with get order')
    }
  }

  async editOrder(req, res) {     
    try {
    const order = await OrdersQueries.editOrderDb(req.body);
    res.json(order.rows[0]);
    } catch (err) {
      throw new Error('smth wrong with edit order')
      }
  }

  async deleteOrder(req, res) {    
    const id = req.params.id;
    try {
   const order = await OrdersQueries.deleteOrderDb(id);
   res.json(order.rows[0]);
    } catch (err) {
      throw new Error('smth wrong with delete order')
      }
  } 
}

module.exports = new orderController();

