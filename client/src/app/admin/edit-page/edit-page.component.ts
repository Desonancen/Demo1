import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from 'src/app/shared/interfaces';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup

  orders_info:Order

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService,
    private alert: AlertService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe( (params: Params) => {
      this.ordersService.getById(params.id).subscribe( (response) => {
        this.orders_info = response
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

}
