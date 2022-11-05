import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/authentication/service/auth.service';
import { MovieService } from '../../../movie/services/movie.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  listMovies: any[] = [];
  loading: boolean = false;
  constructor(private _MovieService: MovieService, private _AuthService: AuthService) {
    this.getListMovies();
  }

  ngOnInit(): void {
    this._AuthService.isLoading.subscribe(isloading => {
      this.loading = isloading
    });
  }
  getListMovies() {
    this._MovieService.listMovies().subscribe({
      next: (res: any) => {
        this.listMovies = res.message;
      }
    })
  }
}
