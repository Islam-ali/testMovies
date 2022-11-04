import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide:boolean=true;
  errorMessage!:string;
  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) { }
  registerForm:FormGroup= new FormGroup({
    'name':new FormControl(null,[Validators.required]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {
  }
  get f()
  {
    return this.registerForm.controls;
  }
  register(){
    if(this.registerForm.invalid){return}
    this._AuthService.register(this.registerForm.value).subscribe({
      next:(data:any)=>{
        console.log(data);
        
        if(data.status == "success"){
          localStorage.setItem('token',data.authorisation.token)
          this._Router.navigateByUrl("/")
          this.toastr.success('Register is successfully', data.status); 
        }else{
          this.errorMessage = data.message
        }
      },
      error(err:any){console.log(err)}
  })
  }

}
