import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/service/auth.service';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private _AuthGuard:AuthGuard , private router: Router,private _AuthService:AuthService) { 
    this._AuthGuard.IsLogin.subscribe((login)=>{
      this.isLogin = login
    })
    console.log(this.isLogin);
    
  }

  ngOnInit(): void {
  }
  logout(){
    this._AuthService.logout()
  }
}
