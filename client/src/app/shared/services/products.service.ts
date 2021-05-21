import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DbCreateResponse, Product } from "../interfaces";
import { map } from "rxjs/operators"

@Injectable({providedIn:'root'})

export class ProductsService {
    constructor(private http: HttpClient) {}

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(`${environment.serverUrl}/product`, product)
        .pipe(map( (response:DbCreateResponse) => {
              const newOrder: Product = {
                ...product,
                name: response.name
            }
            return newOrder
        }))
    }

    getAll(): Observable<Product[]> {
        return this.http.get(`${environment.serverUrl}/product`)
        .pipe(map( (response: {[key: string]: any}) => {
            return  Object
            .keys(response)
            .map(key => ({
                ...response[key]
            }))
            
        }))
    }
    


    getById(id: string ) {
        return this.http.get<Product>(`${environment.serverUrl}/product/${id}`)
        .pipe(map( (product: Product) => {
  
            return{
              ...product
          }
      }))
   }

    //Check how it work on server side and db
    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.serverUrl}/product/${id}`)
    }


}