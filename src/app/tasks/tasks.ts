import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTask } from './new-task/new-task';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required:true}) name!: string;
  isAddingTask = false;
  

  constructor(public taskService: TasksService){
  }

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
  }

  onStartAddTask(){
    this.isAddingTask = true;
}

  onCloseAddTask(){
    this.isAddingTask = false;
}
}
