import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  editUserForm: FormGroup;
  users: any;
  user: any;
  term: any;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;


  constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private fb: FormBuilder, private modalService: NgbModal) {
    this.editUserForm = this.fb.group({
      nom: new FormControl('', [
        Validators.required
      ]),
      prenom: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required,
      ]),
      dateN: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),


    });
   }
   // tslint:disable-next-line:typedef
   get nom() {
    return this.editUserForm.get('nom');
  }
  // tslint:disable-next-line:typedef
  get prenom() {
    return this.editUserForm.get('prenom');
  }
  // tslint:disable-next-line:typedef
  get username() {
    return this.editUserForm.get('username');
  }

  // tslint:disable-next-line:typedef
  get dateN() {
    return this.editUserForm.get('dateN');
  }
   // tslint:disable-next-line:typedef
   get password() {
    return this.editUserForm.get('password');
  }
  // tslint:disable-next-line:typedef
  openModal(targetModal: any, user: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editUserForm.patchValue({
      nom: user.nom,
      prenom: user.prenom,
      username: user.username,
      dateN: user.dateN,
      password: user.password
    });

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.userService.getAdminBoard().subscribe(
      data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.users = this.userService.getUsers().subscribe(data => this.users = data);
        console.log(this.users);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  // tslint:disable-next-line:typedef
  supprimer(id: any) {
    const res = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?');
    if (res) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      console.log(res);
      window.location.reload();
    },
      err => {
        console.log(err);
      }
    );
    }
}
// tslint:disable-next-line:typedef
onSubmit(id: any) {
  const data = this.editUserForm.value;
  console.log(data);
  console.log(id);
  this.userService.updateUser(id, data).subscribe(
   res => {
       console.log("yes");
       console.log(res);
      },
       err => {
         console.log(err);
      }
     );

  this.modalService.dismissAll();
  window.location.reload();

}

}
