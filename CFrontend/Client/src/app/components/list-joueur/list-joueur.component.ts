import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Joueur } from './../../models/joueur';
import { ListJoueurService } from './../../_services/list-joueur.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal,private fb: FormBuilder, private joueurService: ListJoueurService) {
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
    }

    this.editJoueurForm = this.fb.group(formControls)
   }
   get nom() { return this.editJoueurForm.get('nom') }
   get prenom() { return this.editJoueurForm.get('prenom') }
   get poste() { return this.editJoueurForm.get('poste') }
  ngOnInit(): void {

    let tab = new Array();
    this.joueurs = this.joueurService.getJoueur().subscribe((data: any) => {
      this.joueurs = data

      data.forEach((element: any) => {

        this.joueurService.getJoueurImage(element.idJoueur).subscribe(
          (res: any) => {
            element.retrieveResonse = res
            element.base64Data = res.picByte;
            element.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;
            tab.push(element)
          });
      },
        (err: any) => {
          console.log(err)
        }
      )
    });
  }
  selectChangePoste(event: any) {
    this.selectedPoste = event.target.value;
  }

  openModal(targetModal: any, joueur: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    this.editJoueurForm.patchValue({
      nom: joueur.nom,
      prenom: joueur.prenom,
      poste:joueur.poste

    });
  }
  onSubmit(idJoueur: any) {
    const data = this.editJoueurForm.value;
    this.joueurService.editJoueur(idJoueur, data).subscribe(
      res => {
        //this.toastr.success('Formateur modifié avec succès');
        //this.router.navigateByUrl('/listFormateur');
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
  supprimer(id_joueur: any) {
    let res = confirm('Êtes-vous sûr de vouloir supprimer ce joueur?');
    if (res) {
      this.joueurService.deleteJoueur(id_joueur).subscribe((data: any) => {
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
