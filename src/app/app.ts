import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent,TasksComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('first-angular-appCG');
  selectedUserId = "u1"


  get selectedUser(){
    return this.users.find((user) =>  user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
