import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  User: any;
  user: any;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;

  // tslint:disable-next-line:max-line-length
  constructor(private token: TokenStorageService, private userService: UserService, private fb: FormBuilder, private modalService: NgbModal ) { }




  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.currentUser = this.token.getUser();
    const id = this.currentUser.id;
    this.User = this.userService.getUserbyId(id).subscribe(data => {
      this.User = data;
    });
  }


}
