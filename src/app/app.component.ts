import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion_app';

  setflag(){
    // console.log(document.location.href);
    if(document.location.pathname =='/') return true;
    // this.route.navigate(['/create_list']);
    return false;
  }
}
