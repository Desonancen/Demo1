import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/interfaces';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {

  orders: Order[]
  pSub: Subscription
  dSub: Subscription  // Очистка подписки для предотвращения утечки памяти
  searchStr = ''

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.pSub = this.ordersService.getAll().subscribe( orders => {
      this.orders = orders
    })
  }

  remove(id: any) {
   this.dSub = this.ordersService.remove(id).subscribe( () => {
     this.orders = this.orders.filter(order => order.id !==id)
   })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

}
