import { ImageJoueur } from './../models/image-joueur';
import { Joueur } from './../models/joueur';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddJoueurService {
  message ?:string;
  private addJoueurUrl="http://localhost:5001/api/addJoueur"
  private addImageUrl="http://localhost:5001/api/upload/"


  constructor(private http:HttpClient) { 
    
  }

  addJoueur(joueur:Joueur, idEquipe:any){
    return this.http.post<any>("http://localhost:5001/api/equipe/"+idEquipe+"/addJoueur",joueur);
  }

  addImage(imageJoueur:any,id_joueur:any){
    return this.http.post(this.addImageUrl+id_joueur,imageJoueur)
  }

}
