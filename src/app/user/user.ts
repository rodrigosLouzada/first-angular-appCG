import { Component, computed, EventEmitter, Input, Output, output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({required: true}) user! : {
    id : string;
    avatar : string;
    name : string;
  };
  
  @Output() select = new EventEmitter();

  get imagePath(){
    return '/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }
}
