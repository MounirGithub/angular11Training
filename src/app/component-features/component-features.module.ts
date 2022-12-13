import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { FormCompComponent } from '../components/form-comp/form-comp.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [    
    HomeComponent,
    ProductComponent,
    FormCompComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    ProductComponent
  ]
})
export class ComponentFeaturesModule { }
