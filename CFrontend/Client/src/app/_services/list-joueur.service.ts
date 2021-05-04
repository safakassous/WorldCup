import { Joueur } from './../models/joueur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListJoueurService {

  private getJoueurs="http://localhost:5001/api/equipe/"

  private addImageUrl="http://localhost:5001/api/getImage/"
  
  constructor(private http:HttpClient) {    
  }
  getJoueur(equipeId :any){
    return this.http.get("http://localhost:5001/api/equipe/"+equipeId+"/joueurs")
  }

  getJoueurImage(id: any | null){
    return this.http.get(this.addImageUrl+id)
  }

  deleteJoueur(id_joueur: any | null,idEquipe:any,){
    return this.http.delete('http://localhost:5001/api/equipe/'+idEquipe+"/deleteJoueur/" + id_joueur );
  }
  deleteImageJoueur(id_joueur: any | null){
    return this.http.delete('http://localhost:5001/api/deleteImage/' + id_joueur );
  }

  editJoueur(  idJoueur: any , idEquipe:any,joueur: Joueur,) {
    return this.http.put('http://localhost:5001/api/equipe/' +idEquipe+"/updateJoueur/"+idJoueur, joueur);
  }
}
