import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full}'},
      {path: 'product', component: ProductComponent},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
