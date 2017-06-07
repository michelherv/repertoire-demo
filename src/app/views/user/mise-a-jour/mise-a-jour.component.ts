import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services';
import { UserDto } from '../../../objects';


@Component({
  templateUrl: './mise-a-jour.component.html',
  styleUrls: ['./mise-a-jour.component.css']
})
export class MiseAJourComponent implements OnInit {
  user: UserDto;

  constructor(
    public location: Location,
    public route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.userService.get(+data['id']).subscribe(user => {
        this.user = user;
        this.user.enabled = true;
      });
    });
  }

  doBack() {
    this.location.back();
  }

  doSave() {
    this.userService.update(this.user).subscribe(user => this.location.back());
  }
}
