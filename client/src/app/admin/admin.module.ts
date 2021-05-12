import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        OrdersPageComponent
    ],
    
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component:AdminLayoutComponent, children: [
                    {path: 'orders', component: OrdersPageComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})

export class AdminModule {

}