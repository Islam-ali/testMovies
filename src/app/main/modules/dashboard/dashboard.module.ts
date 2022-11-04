import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateMoviesComponent } from './componens/create-movies/create-movies.component';
import { CoreModule } from 'src/app/@core/core.module';
import { IndexComponent } from './componens/index/index.component';
import { UpdateComponent } from './componens/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateMoviesComponent,
    IndexComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
