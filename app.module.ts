import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product/product-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent} from './product/list/list.component';
import { from } from 'rxjs';
import { AddComponent } from './product/add/add.component';
import { ViewComponent } from './product/view/view.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
     AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }