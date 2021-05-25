import { Pipe, PipeTransform } from "@angular/core";
import { Order } from "src/app/shared/interfaces";

@Pipe({
    name: 'searchOrders'
})
export class SearchPipe implements PipeTransform {
    transform(orders: Order[], search = ''): Order[] {
        if (!search.trim()) {
            return orders
        }
        return orders.filter( order => {
            return order.name.toLowerCase().includes(search.toLowerCase())
        })
    }
}