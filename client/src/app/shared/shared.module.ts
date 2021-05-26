import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderAlertComponent } from './components/order-alert/order-alert.component';

@NgModule({
    imports:[
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[HttpClientModule, FormsModule, ReactiveFormsModule],
})

export class SharedModule {

}