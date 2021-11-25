import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Taskobj } from '../taskobj';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css'],
})
export class ShowtaskComponent implements OnInit {
  taskobj: Taskobj[];
  route: string;
  router: string;

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService
  ) {}
  complete(task) {
    localStorage.setItem(
      task.title,
      JSON.stringify(
        new Taskobj(
          task.title,
          task.description,
          task.date,
          'Completed',
          new Date().getTime()
        )
      )
    );
    tentask(task);
    this.taskobj = this._dataService.getProgress();
  }
  ngOnInit(): void {
    this.router = this._route.snapshot.url[0].path;
    if (this._route.snapshot.url[0].path === 'inprogress') {
      this.route = 'Progress';
      this.taskobj = this._dataService.getProgress();
    }
    if (this._route.snapshot.url[0].path === 'completed') {
      this.route = 'Completed';
      this.taskobj = this._dataService.getCompleted();
    }
    if (this._route.snapshot.url[0].path === 'archieved') {
      this.route = 'Archieved';
      this.taskobj = this._dataService.getArchieved();
    }
  }
}
//To Handle only ten task at completed page
function tentask(task: any) {
  let keys = Object.keys(localStorage);
  let i = keys.length;
  let count = 0;
  let obj: Taskobj = null;
  let min = -1;
  while (i--) {
    if (JSON.parse(localStorage.getItem(keys[i])).status == 'Completed') {
      count++;
      if (min == -1) {
        min = JSON.parse(localStorage.getItem(keys[i])).timestamp;
        obj = JSON.parse(localStorage.getItem(keys[i]));
      } else {
        if (min > JSON.parse(localStorage.getItem(keys[i])).timestamp) {
          min = JSON.parse(localStorage.getItem(keys[i])).timestamp;
          obj = JSON.parse(localStorage.getItem(keys[i]));
        }
      }
    }
  }
  if (count > 10) {
    localStorage.setItem(
      obj.title,
      JSON.stringify(
        new Taskobj(
          obj.title,
          obj.description,
          obj.date,
          'Archieved',
          new Date().getTime()
        )
      )
    );
  }
}
