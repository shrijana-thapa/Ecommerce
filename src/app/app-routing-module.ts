import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce';
import { AuthGuard } from './loginComponent/authguard/auth-guard';

const routes: Routes = [
  {
    path:'ecommerce',loadChildren:()=> import('./ecommerce/ecommerce/ecommerce-module').then(m => m.EcommerceModule)
  },
    { path: '', redirectTo: 'ecommerce', pathMatch: 'full' },
    {
      path:'login',loadChildren:()=>import('./loginComponent/components/login/login-module').then(m=>m.LoginModule)
    },
    {
      path:'admin',loadChildren:()=>import('./admin component/admin/admin-module').then(m=>m.AdminModule) ,canActivate: [AuthGuard]
    },
    {
      path:'cart',loadChildren:()=>import('./cartComponent/cart/cart-module').then(m =>m.CartModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
