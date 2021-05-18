import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  form: FormGroup

  constructor(private productsSerice: ProductsService) { }

  ngOnInit() {
    this.form = new FormGroup( {
      provider: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      avaliable: new FormControl(true),
      details: new FormControl(null, Validators.maxLength(30)),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const product: Product = {

      id: 5,
      provider: this.form.value.provider,
      name: this.form.value.name,
      avaliable: this.form.value.avaliable,
      price: this.form.value.price,
      details: this.form.value.details
    }

    this.productsSerice.create(product).subscribe( () => {
      this.form.reset()
    })
    
  }

}