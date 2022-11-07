import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersRoutingModule } from './filters-routing.module';
import { CreateFiltersComponent } from '../create-filters/create-filters.component';
import { ViewFiltersComponent } from '../view-filters/view-filters.component';


@NgModule({
  declarations: [
    CreateFiltersComponent,
    ViewFiltersComponent
  ],
  imports: [
    CommonModule,
    FiltersRoutingModule
  ]
})
export class FiltersModule { }
