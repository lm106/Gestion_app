import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeLast } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  flag=false;
  list_tasks: any[]=[];
  message='';
  constructor(private route: Router,private myservice: DataService) { 
    
  }
  

  ngOnInit(): void {
    this.getListTasks();
  }
  
  getListTasks(){
    this.myservice.getTasks().subscribe(res =>{
      this.list_tasks=[];
      res.forEach((task:any) => {
        this.list_tasks.push({id: task.payload.doc.id, ...task.payload.doc.data()});
      });
      
    });
    // console.log(this.list_tasks);
  }
  getdesc(descripcion:string){
    if(descripcion.length >100){ 
      return descripcion.substring(0, 70)+ '...';
    }else{
      return descripcion;
    }
  }
  delete(id:string){
    this.message='';
    this.myservice.deleteTask(id).then(() =>{
      this.message="¡Se ha eliminado con éxito!";
    })
  }
}
