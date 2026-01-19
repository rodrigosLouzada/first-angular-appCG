import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const radomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[radomIndex];

  get imagePath(){
    return '/users/' + this.selectedUser.avatar;
  }    
  
  onClick(){
    console.log("it's working!")
  }
}
