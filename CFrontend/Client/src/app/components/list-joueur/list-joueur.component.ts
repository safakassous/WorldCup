import { EquipeService } from './../../_services/equipe.service';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Joueur } from './../../models/joueur';
import { ListJoueurService } from './../../_services/list-joueur.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isExternalModuleNameRelative } from 'typescript';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-list-joueur',
  templateUrl: './list-joueur.component.html',
  styleUrls: ['./list-joueur.component.css']
})
export class ListJoueurComponent implements OnInit {

  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  joueurs: any;
  image: any
  selectedPoste: any
  editJoueurForm: any
  selectedEquipe: any
  equipes: any
  //logoImage
  retrieveLogoResonse: any;
  base64DataLogo: any;
  retrievedLogo: any;
  term: any;
  
  private roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;

  constructor(private modalService: NgbModal,private tokenStorageService: TokenStorageService, private fb: FormBuilder, private equipeService: EquipeService, private joueurService: ListJoueurService) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
      ]),
      prenom: new FormControl('', [
        Validators.required,
      ]),
      poste: new FormControl('', [
        Validators.required,
      ]),
      equipe: new FormControl('', [
        Validators.required,
      ]),
    }

    this.editJoueurForm = this.fb.group(formControls)
  }
  get nom() { return this.editJoueurForm.get('nom') }
  get prenom() { return this.editJoueurForm.get('prenom') }
  get poste() { return this.editJoueurForm.get('poste') }
  get equipe() { return this.editJoueurForm.get('equipe') }

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
                console.log(res)
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
  selectChangePoste(event: any) {
    this.selectedPoste = event.target.value;
  }

  selectChangeEquipe(event: any) {
    this.selectedEquipe = event.target.value;
  }

  openModal(targetModal: any, joueur: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editJoueurForm.patchValue({
      nom: joueur.nom,
      prenom: joueur.prenom,
      poste: joueur.poste,
      equipe: joueur.id_equipe

    });
  }
  onSubmit(idJoueur: any) {
    const data = this.editJoueurForm.value;
    this.joueurService.editJoueur(idJoueur, data.equipe, data).subscribe(
      res => {
        console.log(res)
        //this.toastr.success('Formateur modifié avec succès');
        this.modalService.dismissAll();
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
    this.modalService.dismissAll();
    window.location.reload();
  }


  supprimer(id_joueur: any, idEquipe: any) {
    let res = confirm('Êtes-vous sûr de vouloir supprimer ce joueur?');
    if (res) {
      this.joueurService.deleteJoueur(id_joueur, idEquipe).subscribe((data: any) => {
        //this.toastr.success('joueur supprimé avec succès');
        window.location.reload();
      },
        err => {
          console.log(err);
        });
      this.joueurService.deleteImageJoueur(id_joueur).subscribe((data: any) => {
        window.location.reload();
      },
        err => {
          console.log(err);
        });
    }
  }
}
