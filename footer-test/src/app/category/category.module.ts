import { NgModule } from '@angular/core';


import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryContainerComponent } from './category-container';


@NgModule({
  declarations: [
    CategoryContainerComponent
  ],
  imports: [
    SharedModule,    
    CategoryRoutingModule
  ]
})
export class CategoryModule { }