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
        return this.http.post<Product>(`${environment.dbUrl}/product`, product)
        .pipe(map( (response:DbCreateResponse) => {
              const newOrder: Product = {
                ...product,
                name: response.name
            }
            return newOrder
        }))
    }

    getAll(): Observable<Product[]> {
        return this.http.get(`${environment.dbUrl}/product`)
        .pipe(map( (response: {[key: string]: any}) => {
            return  Object
            .keys(response)
            .map(key => ({
                ...response[key],
                id: key,
                date: new Date(response[key].date)
            }))
            
        }))
    }
    

    //Need to change smth in thi method
    getById(id: string ) {
        return this.http.get<Product>(`${environment.dbUrl}/product/${id}`)
        .pipe(map( (product: Product) => {
            return{
              ...product, id,
              created_date: new Date()
          }
      }))
    }

    //Check how it work on server side and db
    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.dbUrl}/product/${id}`)
    }


}