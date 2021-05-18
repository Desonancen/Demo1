import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/shared/interfaces';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  order: Order
  form: FormGroup

  constructor(private route: ActivatedRoute,
    private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.route.params.pipe( 
      switchMap((params: Params) => {
        return this.ordersService.getById(params['id'])
      })
    ).subscribe((order) => {
      this.form = new FormGroup( {
        delivery_address: new FormControl(order.delivery_address, Validators.required),
        comment: new FormControl(order.comment)
      })
    })  
  }

  submit() {

  }

}
