import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/_services/billet.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-billet-list',
  templateUrl: './billet-list.component.html',
  styleUrls: ['./billet-list.component.css']
})
export class BilletListComponent implements OnInit {
  billets:any;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;

  constructor(private service:BilletService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.billets=this.service.getBillets().subscribe(data=>this.billets=data)
  }

}
