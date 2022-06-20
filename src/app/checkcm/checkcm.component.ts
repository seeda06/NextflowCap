import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkcm',
  templateUrl: './checkcm.component.html',
  styleUrls: ['./checkcm.component.scss'],
})
export class CheckcmComponent implements OnInit {
data:any[]=[
      {id:'1',comment:'สมมุติ1',subject:'คห.1'}
    ];
  constructor() { 
    
  }

  ngOnInit() {
    this.getdata();
  }
  getdata(){ 
    
    this.data=[
      {id:'1',comment:'สมมุติ1',subject:''},
      {id:'2',comment:'สมมุติ2',subject:''},
      
    ];
   
  }
}
