import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsMovieRoutingModule } from './details-movie-routing.module';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsMovieRoutingModule
  ]
})
export class DetailsMovieModule { }
