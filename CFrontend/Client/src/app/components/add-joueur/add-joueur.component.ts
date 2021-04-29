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


  constructor(private fb: FormBuilder, private addJoueurService: AddJoueurService, private router: Router) {
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

    this.addJoueurForm = this.fb.group(formControls)
  }

  get nom() { return this.addJoueurForm.get('nom') }
  get prenom() { return this.addJoueurForm.get('prenom') }
  get poste() { return this.addJoueurForm.get('poste') }



  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {

  }
  selectChangePoste(event: any) {
    this.selectedPoste = event.target.value;
  }

  addJoueur() {
    let data = this.addJoueurForm.value;
    let joueur: any
    if (this.selectedFile)
      joueur = new Joueur(data.nom, data.prenom, data.poste, 1)
    else
      joueur = new Joueur(data.nom, data.prenom, data.poste, 0)
    
      
    this.addJoueurService.addJoueur(joueur).subscribe(
      res => {
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile);

        //Make a call to the Spring Boot Application to save the image
        let id_joueur = res.idJoueur
        this.addJoueurService.addImage(uploadImageData, id_joueur).subscribe((response) => {});
        this.router.navigateByUrl('/listJoueurs');
      },
      err => {
        console.log(err)
      }

    )
  }
}
