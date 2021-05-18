import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";
import { LoginPageComponent } from './login-page/login-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "./shared/services/auth.guard";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        OrdersPageComponent,
        LoginPageComponent,
        EditPageComponent
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]},
                    {path: 'order/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
                ]
            }
        ])
    ],
    providers: [AuthService, AuthGuard],
    exports: [RouterModule]
})

export class AdminModule {

}