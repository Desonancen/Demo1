import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order, Product } from 'src/app/shared/interfaces';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  productSub: Subscription
  ordersSub: Subscription

  orders_info: Order
  product_info: Product

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService,
    private alert: AlertService,
    public productsService: ProductsService
    ) { }

  ngOnInit() {

    this.route.params.subscribe( (params: Params) => {
    this.ordersSub =  this.ordersService.getById(params.id).subscribe( (response) => {
        this.orders_info = response

        if (this.orders_info.id) {
          this.productSub = this.productsService.getById(this.orders_info.product_id.toString()).subscribe( (response) => {
            this.product_info = response
          })
        }
      })
    })

      this.form = new FormGroup( {
      address: new FormControl(null, Validators.required),
      comment: new FormControl(null, Validators.maxLength(30)),
      paid: new FormControl(null)
      })

  } 

    submit() {
      if (this.form.invalid) {
        return
      }

      const newOrder = {
        delivery_address: this.form.value.address,
        comment: this.form.value.comment,
        paid: this.form.value.paid,
        id: this.orders_info.id
      }

      this.ordersService.update(newOrder).subscribe( () => {
        this.form.reset()
        this.alert.success('You update information about order')
        this.router.navigate(['/admin', 'orders'])
      })

    }

    ngOnDestroy() {
          if (this.productSub) {
          this.productSub.unsubscribe()
        }

        if (this.ordersSub) {
          this.ordersSub.unsubscribe()
        }
    }

}
