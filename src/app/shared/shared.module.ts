import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NotresultComponent } from '../@core/components/notresult/notresult.component';


@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    NotresultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports:[
    CardComponent,
    ListComponent,
    NotresultComponent
  ]
})
export class SharedModule { }
