import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeData, ReqhomeData } from 'src/service/home.interface';
import { HomeService } from 'src/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeForm:FormGroup;
  router: any;
 data:HomeData;
  constructor(private homeService: HomeService, private createfrom:FormBuilder) {

   }

  ngOnInit() {
    this.Home();
  }

Home(){
  let req :ReqhomeData={
    type:localStorage.getItem('login')
  };
  this.homeService
  .postHome(req)
  .subscribe((result)=>{
    // console.log(result.rank);
    
    if(result){
      this.data=result;

    }

   console.log(result);
     })
      ;
  
}
}
