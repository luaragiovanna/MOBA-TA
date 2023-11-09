import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
