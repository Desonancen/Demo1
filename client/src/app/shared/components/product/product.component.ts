import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product
  randomImgUrl: string

  quantity: number = 1

  constructor() { }

  ngOnInit() {}

  getRandomImgUrl() {
    return this.randomImgUrl = 'https://picsum.photos/200/200?cache=' + new Date().getTime()
  }

  randomImage = this.getRandomImgUrl()
  
}