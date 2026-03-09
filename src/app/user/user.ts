import { Component, computed, EventEmitter, Input, Output, output } from '@angular/core';
import { type User} from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return '/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }
}
