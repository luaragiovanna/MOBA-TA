import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
