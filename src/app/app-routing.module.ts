import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { CreateListComponent } from './create-list/create-list.component';

const routes: Routes = [
  { path: 'lists', redirectTo:'', component: ListsComponent },
  { path: 'create_list', component: CreateListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
