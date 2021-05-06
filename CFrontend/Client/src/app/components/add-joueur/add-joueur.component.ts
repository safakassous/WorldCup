import { EquipeService } from './../../_services/equipe.service';
import { Router } from '@angular/router';
import { AddJoueurService } from './../../_services/add-joueur.service';
import { HttpClient } from '@angular/common/http';
import { Joueur } from './../../models/joueur';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  addJoueurForm: FormGroup
  message?: string;
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  name: any;
  selectedPoste = '';
  selectedEquipe = '';
  equipes:any


  constructor(private fb: FormBuilder, private joueurService: AddJoueurService, private equipeService:EquipeService,private router: Router) {
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

    this.addJoueurForm = this.fb.group(formControls)
  }

  get nom() { return this.addJoueurForm.get('nom') }
  get prenom() { return this.addJoueurForm.get('prenom') }
  get poste() { return this.addJoueurForm.get('poste') }
  get equipe() { return this.addJoueurForm.get('equipe') }



  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.equipes = this.equipeService.getEquipes().subscribe(data =>{this.equipes = data} );

  }
  selectChangePoste(event: any) {
    this.selectedPoste = event.target.value;
    
  }
  selectChangeEquipe(event: any) {
    this.selectedEquipe = event.target.value;
  }

  addJoueur() {
    let data = this.addJoueurForm.value;
   

      let joueur: any
    if (this.selectedFile)
      joueur = new Joueur(data.nom, data.prenom, data.poste,data.equipe, 1)
    else
      joueur = new Joueur(data.nom, data.prenom, data.poste,data.equipe, 0)
    console.log(joueur)
  
    this.joueurService.addJoueur(joueur, this.selectedEquipe).subscribe(
      res => {
        console.log(res);
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile);

        //Make a call to the Spring Boot Application to save the image
        let id_joueur = res.id
        this.joueurService.addImage(uploadImageData, id_joueur).subscribe((response) => {});
        this.router.navigateByUrl('/listJoueurs');
      },
      err => {
        console.log(err);
      }
    );
  
    


    // let joueur: any
    // if (this.selectedFile)
    //   joueur = new Joueur(data.nom, data.prenom, data.poste,data.equipe, 1)
    // else
    //   joueur = new Joueur(data.nom, data.prenom, data.poste,data.equipe, 0)
    
      
    // this.joueurService.addJoueur(joueur).subscribe(
    //   res => {
    //     //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    //     const uploadImageData = new FormData();
    //     uploadImageData.append('imageFile', this.selectedFile);

    //     //Make a call to the Spring Boot Application to save the image
    //     let id_joueur = res.idJoueur
    //     this.joueurService.addImage(uploadImageData, id_joueur).subscribe((response) => {});
    //     this.router.navigateByUrl('/listJoueurs');
    //   },
    //   err => {
    //     console.log(err)
    //   }

    // )
  }
}
