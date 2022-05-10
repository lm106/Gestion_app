import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  titulo='';
  des='';
  Encargado='';
  form:FormGroup;
  constructor(private FBuilder: FormBuilder, 
    private myservice: DataService, private route: Router) { 
    this.form = this.FBuilder.group({
      titulo: ['', Validators.required],
      des: ['', Validators.required],
      encargado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  create_task(title:string, desc:string, encargado:string, event:Event){
    const task={title: title, descripcion: desc, encargado:encargado};
    this.myservice.addTask(task).then(() => {

      this.route.navigate(['/']);
      
    }).catch(error => {
      console.log(error);
    }) 
  }
}
