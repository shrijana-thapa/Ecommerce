import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Admin } from './admin';


@NgModule({
  declarations: [Admin],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
