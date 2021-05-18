import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DbCreateResponse, Order } from "./interfaces";
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
        })) //.json возможно нужно будет заменить на что-то другое, 
                                                                                     // чтоб данные переводились в json
    }
}