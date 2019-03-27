import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    hide : true,
    image : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
