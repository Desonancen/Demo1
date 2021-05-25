import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/interfaces';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {

  orders: Order[]
  orderSub: Subscription
  deleteSub: Subscription
  productSub: Subscription 
  searchStr = ''

  popoverTitle = 'Delete order';
  popoverMessage = 'Are you sure you want to delete the order?';
  cancelClicked: boolean

  constructor(private ordersService: OrdersService,
    private alert: AlertService
    ) { }

  ngOnInit() {
    this.orderSub = this.ordersService.getAll().subscribe( orders => {
      this.orders = orders
    })
  }

  remove(id: any, confirmClicked: boolean) {
    if(confirmClicked) {
    this.deleteSub = this.ordersService.remove(id).subscribe( () => {
      this.orders = this.orders.filter(order => order.id !==id)
      this.alert.danger('You delete order')
      })
    }
   }

  ngOnDestroy() {
    if (this.orderSub) {
      this.orderSub.unsubscribe()
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe()
    }
  }

}
