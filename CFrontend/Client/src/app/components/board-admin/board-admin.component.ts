import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';

  users: any;
  constructor(private userService: UserService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.users = this.userService.getUsers().subscribe(data => this.users = data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}


