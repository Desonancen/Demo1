import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { LoginPageComponent } from './login-page/login-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "./shared/services/auth.guard";
import { SearchPipe } from "./shared/search.pipe";
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from "./shared/services/alert.service";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        OrdersPageComponent,
        LoginPageComponent,
        EditPageComponent,
        SearchPipe,
        AlertComponent
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
    providers: [AuthGuard, AlertService],
    exports: [RouterModule]
})

export class AdminModule {

}