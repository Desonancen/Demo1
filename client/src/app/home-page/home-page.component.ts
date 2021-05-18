import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/interfaces';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  products: Product[]
  pSub: Subscription  //prouductSub
  dSub: Subscription  // Очистка подписки для предотвращения утечки памяти
  searchStr = ''

  constructor(private ordersService: ProductsService) { }

  ngOnInit() {
    this.pSub = this.ordersService.getAll().subscribe( products => {
      this.products = products
    })
  }

  remove(id: any) {
   this.dSub = this.ordersService.remove(id).subscribe( () => {
     this.products = this.products.filter(products => products.id !==id)
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