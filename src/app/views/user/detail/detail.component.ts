import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services';
import { UserDto } from '../../../objects';


@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user: UserDto;

  constructor(
    public location: Location,
    public route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.userService.get(+data['id']).subscribe(user => this.user = user);
    });
  }

  doBack() {
    this.location.back();
  }
}
