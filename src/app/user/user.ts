import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const radomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = signal(DUMMY_USERS[radomIndex]);
  imagePath = computed(() =>  '/users/' + this.selectedUser().avatar);


  // get imagePath(){
  //   return '/users/' + this.selectedUser.get(avatar);
  // }    
  
  onSelectedUser(){
    const radomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[radomIndex]);
  }
}
