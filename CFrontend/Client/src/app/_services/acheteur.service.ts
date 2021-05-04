import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acheteur } from '../models/acheteur';

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {
  private addAcheteurUrl= "http://localhost:5001/api/addAcheteur"
  private addTransactionUrl = "http://localhost:5001/sendAttachmentEmail"

  constructor(private http:HttpClient) {
  
  }

  addAcheteur(acheteur: Acheteur){
    return this.http.post<any>(this.addAcheteurUrl,acheteur);
  }

  addTransaction(body:any){
    return this.http.post<any>(this.addTransactionUrl,body);
  }
}
