import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Order, Product } from '../../interfaces';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  form: FormGroup
  
  product_info: Product = {
    id: 1,
    provider: "",
    name: "",
    avaliable: true,
    price: 1500,
    details: "DA"
  }

  quantity: number
  total_price: number

  constructor(private ordersSerice: OrdersService,
    private route: ActivatedRoute, 
    private productsService: ProductsService) { }

  ngOnInit() {
    //this.product_info = (JSON.parse(sessionStorage.getItem("product-info") || ""));

    this.route.params.subscribe( (params: Params) => {
      this.quantity = params.quantity
      this.productsService.getById(params.id).subscribe( (response) => {
        this.product_info = response
      })
      this.total_price = this.quantity*this.product_info.price
    }) 

    this.form = new FormGroup( {
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.maxLength(30)),
      paid: new FormControl(false)
    })
  }

  getProductInfo() {
    const productInfo = sessionStorage.getItem("product-info")
    console.log(productInfo);
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const order: Order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      created_date: new Date(),
      delivery_address: this.form.value.address,
      total_price: this.total_price,
      comment: this.form.value.comment,
      product_amount: this.quantity,
      paid: this.form.value.paid,
      product_id: this.product_info.id
    }

    this.ordersSerice.create(order).subscribe( () => {
      this.form.reset()
    })
    
  }

}
