import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../service/task.service';
import { Task } from './../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  checkDelete:boolean = false;
  constructor( private taskService: TaskService ) {
    
   }

  ngOnInit(): void {
    //promesa getTask
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      //console.log("tarea \n lista");
      //console.log(tasks);

    });
  }
  deleteTask(task: Task){
    //console.log("delete task");
    this.checkDelete=true;
    this.taskService.deleteTask(task)
      .subscribe(
        () => {
          this.tasks = this.tasks.filter((t) => {
            //console.log("task delete");
            
            //console.log("check delete "+this.checkDelete);
            return t.id !== task.id
          })
        }
      )
  }

  toggleReminder(task: Task){
    
    //console.log(task.id);
    //console.log(this.tasks.some(item => item.id == task.id));
    //console.log(task.reminder);
    if(!this.checkDelete){
      task.reminder = !task.reminder;
      //console.log("of");
    this.taskService.updateTaskReminder(task).subscribe();
    //console.log("offfffs");
      this.checkDelete = false;
    }
    this.checkDelete = false;
  }
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    });
  }

}
