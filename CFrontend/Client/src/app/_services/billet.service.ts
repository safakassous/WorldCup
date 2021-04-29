import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilletService {

  constructor(private http:HttpClient) { }
   getBillets(){
    return this.http.get("http://localhost:5001/api/billets")
  }

  getBillet(id: string | null){
    return this.http.get("http://localhost:5001/api/billet/"+id)
  }

}
