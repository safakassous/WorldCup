import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BilletService } from 'src/app/_services/billet.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-paiement-billet',
  templateUrl: './paiement-billet.component.html',
  styleUrls: ['./paiement-billet.component.css']
})
export class PaiementBilletComponent implements OnInit {
  billet: any;
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  constructor(private route: ActivatedRoute, private service:BilletService, private tokenStorageService: TokenStorageService, private formBuilder: FormBuilder, public form: FormGroup) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    const id = this.route.snapshot.paramMap.get('id');
    this.billet=this.service.getBillet(id).subscribe(data=>{
      this.billet=data

    })
  }

}
