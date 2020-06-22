import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
