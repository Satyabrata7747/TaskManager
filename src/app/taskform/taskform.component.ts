import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Taskobj } from '../taskobj';
@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css'],
})
export class TaskformComponent implements OnInit {
  constructor() {}
  submit(form: NgForm) {
    if(form.value.title=='' || form.value.description=='' || form.value.date==''){
      alert("Please enter all the fields");
    }
    else{
    const obj = new Taskobj(
      form.value.title,
      form.value.description,
      form.value.date,
      'Progress',
      new Date().getTime()
    );
    localStorage.setItem(obj.title, JSON.stringify(obj));
    alert('Task Added Successfully');
    form.reset();
    }
  }
  ngOnInit(): void {}
}
