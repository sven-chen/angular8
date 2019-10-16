

import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { 
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent, 
  ProductVariantDialogComponent, 
  ProductAmountComponent, 
  ConfirmOrderComponent,
  PaymentComponent} from './components';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOrderComponent,
    PaymentComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents:[
    ProductVariantDialogComponent
  ]
})
export class ProductModule { }
