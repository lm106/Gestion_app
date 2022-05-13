import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  // formulario:FormGroup;
  add=false;
  formulario =  new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    encargado: new FormControl('', [Validators.required])
  });
  id:string | null;
  constructor(private FBuilder: FormBuilder, private myservice: DataService, 
    private route: Router, private active: ActivatedRoute) { 
      this.id = active.snapshot.paramMap.get('id');
    }
    
  ngOnInit(): void {
      this.getTask();
  }
  getTask(){
    let ruta=window.location.pathname;
    // console.log(this.id);
    if(ruta.includes('/edit') && this.id != null){
      console.log('estoy en editar');
      this.myservice.getTask(this.id).subscribe(res =>{
        // console.log(res);
        this.formulario.setValue({
        titulo: res.payload.data()['title'],
        encargado: res.payload.data()['encargado'],
      })
        this.des=res.payload.data()['descripcion']
      });
    }
  }
  create_task(title:string, desc:string, encargado:string, event:Event){
    const task={title: title, descripcion: desc, encargado:encargado};
    if(!this.formulario.get('encargado')?.errors?.['required'] && !this.formulario.get('titulo')?.errors?.['required']){
      this.myservice.addTask(task).then(() => {

        // this.route.navigate(['/']);
        this.add=true;
        
      }).catch(error => {
        console.log(error);
      }) 
    }
  }
}
