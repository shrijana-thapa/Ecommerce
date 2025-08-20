import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce';

const routes: Routes = [
  {
    path:'ecommerce',loadChildren:()=> import('./ecommerce/ecommerce/ecommerce-module').then(m => m.EcommerceModule)
  },
    { path: '', redirectTo: 'ecommerce', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
