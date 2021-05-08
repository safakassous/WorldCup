import { ListJoueurService } from './../../_services/list-joueur.service';
import { EquipeService } from './../../_services/equipe.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  //logoImage
  retrieveLogoResonse: any;
  base64DataLogo: any;
  retrievedLogo: any;
  joueurs: any;
  image: any  
  equipes: any
  term:any
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;

  constructor( private equipeService: EquipeService, private joueurService: ListJoueurService, private tokenStorageService: TokenStorageService) {
   
  }
  

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

    }
    this.equipes = this.equipeService.getEquipes().subscribe(data => { this.equipes = data });

    let tab = new Array();

    this.equipeService.getEquipes().subscribe((data: any) => {

      
      data.forEach((element: any) => {

        this.equipeService.getLogo(element.id).subscribe(
          (res: any) => {
            element.retrieveLogoResonse = res
            element.base64DataLogo = res.picByte;
            element.retrievedLogo = 'data:image/jpeg;base64,' + res.picByte;
            console.log(res)

          },
          (err: any) => {
            console.log(err)
          });
        this.joueurService.getJoueur(element.id).subscribe((res: any) => {

          element.joueurs = res.content
          console.log(res.content)
          tab.push(element)
        
          res.content.forEach((jou: any) => {
            jou.id_equipe = element.id

            this.joueurService.getJoueurImage(jou.id).subscribe(
              (res: any) => {
                jou.retrieveResonse = res
                jou.base64Data = res.picByte;
                jou.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;

              },
              (err: any) => {
                console.log(err)
              });
          });

        });
      });
      
      this.equipes = tab
    });
  }

  supprimer(idEquipe: any) {
    let res = confirm('Êtes-vous sûr de vouloir supprimer ce joueur?');
    if (res) {
      this.equipeService.deleteEquipe(idEquipe).subscribe((data: any) => {
        //this.toastr.success('joueur supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
      this.equipeService.deleteLogoEquipe(idEquipe).subscribe((data: any) => {
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
  }
  
}
