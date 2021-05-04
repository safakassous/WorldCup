import { Equipe } from './../models/equipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private addLogoUrl="http://localhost:5001/api/getLogo/"
  private addImageUrl="http://localhost:5001/api/uploadLogo/"
  constructor(private http:HttpClient) { }

  getEquipes(){
    return this.http.get("http://localhost:5001/api/equipes")
  }
  addEquipe(equipe:Equipe){
    return this.http.post<any>("http://localhost:5001/api/addEquipe",equipe);
  }

  addLogo(imageJoueur:any,id_equipe:any){
    return this.http.post(this.addImageUrl+id_equipe,imageJoueur)
  }

  getLogo(idEquipe: any | null){
    return this.http.get(this.addLogoUrl+idEquipe)
  }

  deleteEquipe(idEquipe:any,){
    return this.http.delete('http://localhost:5001/api/deleteEquipe/'+idEquipe );
  }
  deleteLogoEquipe(id_equipe: any | null){
    return this.http.delete('http://localhost:5001/api/deleteLogo/' + id_equipe );
  }

}
