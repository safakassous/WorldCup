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

  addJoueur(joueur:Joueur){
    return this.http.post<any>(this.addJoueurUrl,joueur);
  }

  addImage(imageJoueur:any,id_joueur:any){
    return this.http.post(this.addImageUrl+id_joueur,imageJoueur)
  }

  getJoueur(id: any | null){
    return this.http.get("http://localhost:8081/api/getImage/"+id)
  }
}
