import { Injectable } from '@angular/core';
import { Taskobj } from './taskobj';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  progress: Taskobj[] = [];
  completed: Taskobj[] = [];
  archieved: Taskobj[] = [];
  //To get Inprogress tasks
  compare(task1, task2) {
    if (task1.timestamp > task2.timestamp) {
      return -1;
    }
    if (task1.timestamp < task2.timestamp) {
      return 1;
    }
    return 0;
  }
  getProgress(): Taskobj[] {
    this.progress = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      if (JSON.parse(localStorage.getItem(keys[i])).status == 'Progress') {
        this.progress.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
    this.progress.sort(this.compare);
    return Array.from(this.progress);
  }
  //To get Completed tasks
  getCompleted(): Taskobj[] {
    this.completed = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    let count = 1;
    while (i--) {
      if (JSON.parse(localStorage.getItem(keys[i])).status == 'Completed') {
        this.completed.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
    return Array.from(this.completed);
  }
  //To get archieved tasks
  getArchieved(): Taskobj[] {
    this.archieved = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      if (JSON.parse(localStorage.getItem(keys[i])).status == 'Archieved') {
        this.archieved.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
    return Array.from(this.archieved);
  }
  constructor() {}
}
