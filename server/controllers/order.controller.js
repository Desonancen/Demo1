const OrdersQueries = require ("../db/dbQueriesOrders");
const db = require ("../db/dbConnector");

//import { Request, Response } from 'express';
//import {Order}  from "../Order";

class orderController {
  async createOrder (req, res) { //: Promise<void> 
    //const { id, delivery_adress, comment, product_amount, paid, phone, product_id,
    //} = req.body;   
   try {
    const newOrder = await OrdersQueries.createOrderDb(req.body); 
    res.json(newOrder.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
   // throw new Error('smth wrong with create')
      }
  }
  
  async getOrders(req, res) {    //Order[] : Promise<void> 
  try {
    const orders = await OrdersQueries.getOrdersDb();
    res.json(orders.rows);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
    //throw new Error('smth wrong with get all orders')
    }
  }

  async getOneOrder(req, res) {       //Order  : Promise<void> 
    const id = req.params.id;
    try {
    const order = await OrdersQueries.getOneOrderDb(id);
    res.json(order.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
    //throw new Error('smth wrong with get one order')
    }
  }

  async editOrder(req, res) {     
    try {
    const order = await OrdersQueries.editOrderDb(req.body);
    res.json(order.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
    //throw new Error('smth wrong with edit order')
      }
  }

  async deleteOrder(req, res) {    
    const id = req.query.id;
    try {
    const order = await OrdersQueries.deleteOrderDb(id);
    res.json(order.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
    //throw new Error('smth wrong with delete order')
      }
  } 
}

module.exports = new orderController();

