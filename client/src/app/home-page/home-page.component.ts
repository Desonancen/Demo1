import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
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
  product:Product
  //imageUrl = 'https://picsum.photos/'

  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private ordersService: ProductsService) { }

  ngOnInit() {
    this.pSub = this.ordersService.getAll().subscribe( products => {
      this.products = products
    })
  }

  
  addProductInOrder(id: number) {
    this.onAdd.emit(this.findProductById(id))
    sessionStorage.setItem("product-info", JSON.stringify(this.findProductById(id)))
    console.log(sessionStorage.getItem("product-info"))
  }

  findProductById(id: number) { 
   for(let i=0; i < this.products.length; i++) {
     if (id == this.products[i].id ) {
       return this.products[i]
     }
    }
    return undefined
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