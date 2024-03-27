import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input()
  task: ITask = {
    id: 0,
    name: "",
    isChecked: false,
    isImportant: false,
  }
 @Output()
 removeEvent = new EventEmitter<number>();
  changeStatus() {
    this.task.isChecked = !this.task.isChecked;
  }
  remove(){
    this.removeEvent.emit(this.task.id);
  }
}