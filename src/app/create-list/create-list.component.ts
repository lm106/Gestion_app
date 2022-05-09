import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  titulo='';
  des='';
  Encargado='';
  constructor() { }

  ngOnInit(): void {
  }
  create_task(title:string, desc:string, encargado:string, event:Event){

  }
}
