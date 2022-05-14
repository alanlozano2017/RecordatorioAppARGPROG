import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';
import { TASKS } from './../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[1];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes =faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task){
    //console.log(task);
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task){
    //console.log("onToggle");
    this.onToggleReminder.emit(task);
  }

}
