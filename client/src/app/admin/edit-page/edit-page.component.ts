import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  orders_info:Order

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService) { }

  ngOnInit(): void {

    this.route.params.subscribe( (params: Params) => {
      this.ordersService.getById(params.id).subscribe( (response) => {
        this.orders_info = response
        console.log(response.id);
        
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

      this.ordersService.update(this.orders_info.id, newOrder).subscribe( () => {
        this.form.reset()
        this.router.navigate(['/admin', 'orders'])
      })

    }

}
