import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './@core/authentication/register/register.component';
import { AuthGuard } from './@core/guards/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movie',
    pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren: () => import('src/app/@core/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path:'movie', loadChildren: () => import('src/app/main/modules/movie/movie.module').then(m => m.MovieModule),
    canActivate:[AuthGuard]
  },
  {
    path:'movie/:id', loadChildren: () => import('src/app/main/modules/details-movie/details-movie.module').then(m => m.DetailsMovieModule),
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard', loadChildren: () => import('src/app/main/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path: '**', redirectTo: '/movie', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ initialNavigation: 'enabledBlocking' , scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
