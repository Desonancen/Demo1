import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../shared/interfaces';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  form: FormGroup

  constructor(private ordersSerice: OrdersService) { }

  ngOnInit() {
    this.form = new FormGroup( {
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.maxLength(30)),
      paid: new FormControl(false)
    })
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
