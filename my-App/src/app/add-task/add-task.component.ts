import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITask } from '../task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() addEvent = new EventEmitter<ITask>();
creationForm = this.fb.group({
  id: [0],
  name:['',Validators.minLength(5)],
  date:[new Date()],
  isChecked:[false],
  isImportant:[false]
})
constructor(private fb: FormBuilder) {
}
create(): void {
  if (!this.creationForm.valid) {
    alert("Invalid data!");
    return;
  }
  const task = this.creationForm.value as ITask;
  this.addEvent.emit(task);
}
}
