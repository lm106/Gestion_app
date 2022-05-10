import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  flag=false;
  constructor(private route: Router,) { 
    
  }
  

  ngOnInit(): void {
  }
  // setflag(){
  //   this.flag=false;
  //   console.log(document.location.href);
  //   if(document.location.pathname =='/') this.flag=false;
  //   // this.route.navigate(['/create_list']);
  //   return this.flag;
  // }

}
