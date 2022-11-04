import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './components/movie/movie.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    MovieComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class MovieModule { }
