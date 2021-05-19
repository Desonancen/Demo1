import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Order, Product } from '../../interfaces';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  form: FormGroup

  //product_info: Product = JSON.parse(sessionStorage["key"])

  constructor(private ordersSerice: OrdersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      console.log('Params',params.id);
      
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
      total_price: 5000,
      comment: this.form.value.comment,
      product_amount: 2,
      paid: this.form.value.paid,
      product_id: 2
    }

    this.ordersSerice.create(order).subscribe( () => {
      this.form.reset()
    })
    
  }

}
