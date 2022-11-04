import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  errorMessage!: string;
  constructor(private _AuthService: AuthService, private _Router: Router,private toastr: ToastrService) { }
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required]),
  })
  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    if (this.loginForm.invalid) { return }
    this._AuthService.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        if(data.status == "success"){
          localStorage.setItem('token',data.authorisation.token)
          this._Router.navigateByUrl("/")
          this.toastr.success('Register is successfully', data.status); 
        }else{
          this.errorMessage = data.message
        }
      },
      error: (err: any) => { 
        this.toastr.error( err , 'ERROR'); 
      }
    })
  }

}
