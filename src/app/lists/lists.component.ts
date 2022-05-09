import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  flag=false;
  constructor(private router: ActivatedRoute,) { 
    
  }
  

  ngOnInit(): void {
  }
  setflag(){
    this.flag=(document.location.pathname =='/')? true: false;
    // document.location.href='/create_list';
    // console.log(document.location.href);
    // return this.flag;
  }

}
