import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/authentication/service/auth.service';
import { ListMovie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  listMovies:any[] = [];
  listCategory:any[] = [];
  loading:boolean = true;
  constructor(private _MovieService:MovieService,private _AuthService:AuthService) { }

  ngOnInit(): void {
    this._AuthService.isLoading.subscribe(isloading=>{
      this.loading = isloading
    });
    this.getListCategoy();
    this.getListMovies();
  }
  getListMovies(){
    this._MovieService.listMovies().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.listMovies = res.message;
      }
    })
  }
  getListCategoy(){
    this._MovieService.listCategory().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.listCategory = res.message;
      }
    })
  }
  getListByCategoy(id:number){
    this._MovieService.listByCategory(id).subscribe({
      next:(res:any)=>{
        this.listMovies = res.message;
        console.log(this.listMovies.length);
      }
    })
  }
}
