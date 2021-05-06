import { Router } from '@angular/router';
import { Joueur } from './../../models/joueur';
import { EquipeService } from './../../_services/equipe.service';
import { AddJoueurService } from './../../_services/add-joueur.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  addEquipeForm: FormGroup
  message?: string;
  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  name: any;
  selectedEquipe = '';
  equipes:any


  constructor(private fb: FormBuilder ,  private equipeService:EquipeService,private router: Router) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
      ]),
      equipe: new FormControl('', [
        Validators.required,
      ]),
    }

    this.addEquipeForm = this.fb.group(formControls)
  }

  get nom() { return this.addEquipeForm.get('nom') }
  get equipe() { return this.addEquipeForm.get('equipe') }
 



  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.equipes = this.equipeService.getEquipes().subscribe(data =>{this.equipes = data} );

  }
 

  addEquipe() {
    let data = this.addEquipeForm.value;
  
    this.equipeService.addEquipe(data).subscribe(
      res => {
        console.log(res);
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile);

        //Make a call to the Spring Boot Application to save the image
        let id_equipe = res.id
        this.equipeService.addLogo(uploadImageData, id_equipe).subscribe((response) => {});
        this.router.navigateByUrl('/listEquipes');
      },
      err => {
        console.log(err);
      }
    );
  
    
  }
}
