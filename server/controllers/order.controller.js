const db = require("../db/dbConnector");
//import { Request, Response } from 'express';
//import {Order}  from "../Order";

export default class orderController {
  async createOrder (req, res) { //: Promise<void> 
    const {
      id,
      delivery_adress,
      comment,
      product_amount,
      paid,
      phone,
      product_id,
    } = req.body;
    const newOrder = await db.query(
      "INSERT INTO orders (id, delivery_adress, comment, product_amount, paid, phone, product_id) values ($1, $2, $3, $4, $5, $6, $7)  RETURNING *",
      [id, delivery_adress, comment, product_amount, paid, phone, product_id]
    );
    res.json(newOrder.rows[0]);
  }

  async getOrders(req, res) {    //Order[] : Promise<void> 
    const orders = await db.query("SELECT * FROM orders");
    res.json(orders.rows);
    //return 
  }

  async getOneOrder(req, res) {       //Order  : Promise<void> 
    const id = req.params.id;
    const order = await db.query("SELECT * FROM orders where id = $1", [id]);
    res.json(order.rows[0]);
  }

  async editOrder(req, res) {     //: Promise<void> 
    const { id, delivery_adress, comment } = req.body;
    const order = await db.query(
      "UPDATE orders set delivery_adress = $1, comment = $2 where id = $3 RETURNING *",
      [delivery_adress, comment, id]
    );
    res.json(order.rows[0]);
  }

  async deleteOrder(req, res) {    //: Promise<void>  
    const id = req.query.id;
    const order = await db.query("DELETE FROM orders where id = $1", [id]);
    res.json(order.rows[0]);
  }
}

