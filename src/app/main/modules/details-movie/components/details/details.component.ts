import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../movie/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsMovie:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(){
    this._ActivatedRoute.params.subscribe((prams) => {
      this._MovieService.detailsMovie(prams['id']).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.detailsMovie =res.message
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    })

  }
}
