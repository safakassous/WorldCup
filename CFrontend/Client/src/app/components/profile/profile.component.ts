import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  User: any;
  constructor(private token: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    const id = this.currentUser.id;
    this.User = this.userService.getUserbyId(id).subscribe(data => {
      this.User = data;
    });
  }
}
