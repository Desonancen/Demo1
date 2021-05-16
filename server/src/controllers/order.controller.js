const OrdersQueries = require ("../db/dbQueriesOrders");

//import { Request, Response } from 'express';
//import {Order}  from "../Order";

class orderController {
  async createOrder (req, res) { //: Promise<void> 
   try {
    const newOrder = await OrdersQueries.createOrderDb(req.body); 
    res.json(newOrder.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
      }
  }
  
  async getOrders(req, res) {    //Order[] : Promise<void> 
  try {
    const orders = await OrdersQueries.getOrdersDb();
    res.json(orders.rows);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
    }
  }

  async getOneOrder(req, res) {       //Order  : Promise<void> 
    const id = req.params.id;
    try {
    const order = await OrdersQueries.getOneOrderDb(id);
    res.json(order.rows[0]);
  } catch (err) {
    console.log(err);  //Change console logs after added cath on client side
    }
  }

  async editOrder(req, res) {     
    try {
    const order = await OrdersQueries.editOrderDb(req.body);
    res.json(order.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
      }
  }

  async deleteOrder(req, res) {    
    const id = req.query.id;
    try {
    const order = await OrdersQueries.deleteOrderDb(id);
    res.json(order.rows[0]);
    } catch (err) {
      console.log(err);  //Change console logs after added cath on client side
      }
  } 
}

module.exports = new orderController();

