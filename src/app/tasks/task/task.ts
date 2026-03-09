import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }

}
