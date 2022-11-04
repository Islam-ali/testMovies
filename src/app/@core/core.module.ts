import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
const matrial = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  CdkAccordionModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDialogModule,
  CdkTableModule,
  MatTableModule,
  MatPaginatorModule
];
  

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    HttpClientModule,
    RouterModule,
    matrial
  ],
  providers: [
    AuthGuard,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
   },
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    AuthenticationModule,
    matrial
  ]
})
export class CoreModule { }
