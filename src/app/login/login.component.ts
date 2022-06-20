import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/service/login.interface';
import { LoginService } from 'src/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;

  constructor(private loginService: LoginService, private router: Router,
    private createfrom:FormBuilder
    ) { }

  ngOnInit():void {
   this.loginForm=this.createfrom.group({
    email : [""],
    password :[""]
   });
    }
//เรียกใช้ loginservice
Login(){
  let req :LoginData={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  };
  this.loginService
  .postLogin(req)
  .subscribe((result)=>{
    // console.log(result.rank);
    
    localStorage.setItem('login',result[0].rank);
    if (result[0].rank ==="admin"){
      alert(result[0].rank);
      localStorage.setItem('login','type')
      this.router.navigate(['/home']);
    }else if (result[0].rank ==="person") {
      alert(result[0].rank);
      this.router.navigate(['/home']);}
      else if (result[0].rank ==="driver") {
        alert(result[0].rank);
        this.router.navigate(['/home']);}
     })
      ;
}
}
