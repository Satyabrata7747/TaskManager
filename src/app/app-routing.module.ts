import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtaskComponent } from './showtask/showtask.component';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [
  {
    path: '',
    component: TaskformComponent,
  },
  {
    path: 'inprogress',
    component: ShowtaskComponent,
  },
  {
    path: 'completed',
    component: ShowtaskComponent,
  },
  {
    path: 'archieved',
    component: ShowtaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
