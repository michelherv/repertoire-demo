import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { UserDto } from '../../../objects';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: UserDto[];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  doRemove(user: UserDto) {
    this.userService.remove(user.id).subscribe(next => {
      this.users = this.users.filter(item => item.id !== user.id);
    });
  }
}
