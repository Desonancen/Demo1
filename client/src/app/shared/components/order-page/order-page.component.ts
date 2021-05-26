import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from 'src/app/admin/shared/services/alert.service';
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
  
  product_info: Product

  quantity: number
  total_price: number

  constructor(
    private ordersSerice: OrdersService,
    private router: Router,
    private route: ActivatedRoute, 
    private productsService: ProductsService,
    private alert: AlertService
    ) { }

  ngOnInit() {

    this.route.params.subscribe( (params: Params) => {
      this.quantity = params.quantity
      this.productsService.getById(params.id).subscribe( (response) => {
        this.product_info = response
        this.total_price = this.product_info.price*this.quantity
      })
    }) 

    this.form = new FormGroup( {
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      phone: new FormControl("", [Validators.required, Validators.pattern("0[0-9]{9}")]),
      address: new FormControl("", Validators.required),
      comment: new FormControl("", Validators.maxLength(30)),
      paid: new FormControl(false),
      amount: new FormControl(this.quantity)
    })
     
  }

  onAdd() {
   this.total_price = this.form.value.amount*this.product_info.price
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
      total_price: this.product_info.price*this.form.value.amount,
      comment: this.form.value.comment,
      product_amount: this.form.value.amount,
      paid: this.form.value.paid,
      product_id: this.product_info.id
    }

    this.ordersSerice.create(order).subscribe( () => {
      this.form.reset()
      this.alert.success('You just make your order')
      this.router.navigate(['/'])

    })
    
  }

}
