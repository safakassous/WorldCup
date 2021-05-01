export class Acheteur {
    id: number | undefined;
    nom:String | undefined;
    prenom:String | undefined;
    numcarte:number | undefined;
    cvc2:number | undefined;
    e_mail:String | undefined;
    dateexp:Date | undefined;  

    constructor(data:any){
        this.id=data.id;
        this.nom=data.nom;
        this.prenom=data.prenom;
        this.numcarte=data.numcarte;
        this.cvc2=data.cvc2;
        this.e_mail=data.e_mail;
        this.dateexp=data.dateexp;
        
    }
}
