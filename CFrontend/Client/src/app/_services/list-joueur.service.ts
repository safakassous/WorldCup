import { Joueur } from './../models/joueur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListJoueurService {

  private getJoueurs="http://localhost:5001/api/joueurs"

  private addImageUrl="http://localhost:5001/api/getImage/"
  
  constructor(private http:HttpClient) {    
  }
  getJoueur(){
    return this.http.get(this.getJoueurs)
  }

  getJoueurImage(id: any | null){
    return this.http.get(this.addImageUrl+id)
  }

  deleteJoueur(id_joueur: any | null){
    return this.http.delete('http://localhost:5001/api/joueur/' + id_joueur );
  }
  deleteImageJoueur(id_joueur: any | null){
    return this.http.delete('http://localhost:5001/api/deleteImage/' + id_joueur );
  }

  editJoueur(  idJoueur: any , joueur: Joueur) {
    return this.http.put('http://localhost:5001/api/updateJoueur/' + idJoueur , joueur);
  }
}
