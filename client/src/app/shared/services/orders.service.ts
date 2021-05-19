import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DbCreateResponse, Order } from "../interfaces";
import { map } from "rxjs/operators"

@Injectable({providedIn:'root'})

export class OrdersService {
    constructor(private http: HttpClient) {}

    create(order: Order): Observable<Order> {
        return this.http.post<Order>(`${environment.dbUrl}/order`, order)
        .pipe(map( (response:DbCreateResponse) => {
              const newOrder: Order = {
                ...order,
                name: response.name,
                created_date: new Date(order.created_date)
            }
            return newOrder
        }))
    }

    getAll(): Observable<Order[]> {
        return this.http.get(`${environment.dbUrl}/order`)
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
    
    getById(id: string ) {
        return this.http.get<Order>(`${environment.dbUrl}/order/${id}`)
        .pipe(map( (order: Order) => {
            return{
              ...order, id,
              created_date: new Date()
          }
      }))
    }

    //Check how it work on server side and db
    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.dbUrl}/order/${id}`)
    }


}