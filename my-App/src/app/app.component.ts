import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITask, TASKS } from './task';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-App';
  tasks: ITask[] = TASKS;

  constructor() {
    console.log(this.tasks);

  }
  sortByAtoZ() {
    this.tasks.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortByZtoA() {
    this.tasks.sort((a, b) => b.name.localeCompare(a.name));
  }
  sortByPriority(){
    this.tasks.sort((a, b) => {
      if (a.isImportant && !b.isImportant) {
        return -1;
      }
      if (!a.isImportant && b.isImportant) {
        return 1;
      }
      return 0;
    });
  }
  sortByDone(){
    this.tasks.sort((a, b) => {
      if (a.isChecked && !b.isChecked) {
        return 1;
      }
      if (!a.isChecked && b.isChecked) {
        return -1;
      }
      return 0;
    });
  }
  removeTask(id: number): void {
    let index = this.tasks.findIndex(x => x.id === id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  addTask(task: ITask): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }
}
