import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AcheteurService } from 'src/app/_services/acheteur.service';
import { BilletService } from 'src/app/_services/billet.service';

@Component({
  selector: 'app-add-acheteur',
  templateUrl: './add-acheteur.component.html',
  styleUrls: ['./add-acheteur.component.css']
})
export class AddAcheteurComponent implements OnInit {

  addAcheteurForm: FormGroup;
  confirmForm: FormGroup;
  r: any;
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private route: ActivatedRoute, private toastr: ToastrService, private fb: FormBuilder, private acheteurService: AcheteurService, private router: Router, private service: BilletService) {
    const formControls = {
      nom : new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z,A-Z.\'-]+')
      ]),
      prenom : new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z,A-Z.\'-]+')
      ]),
      numcarte : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      cvc2 : new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(3),
        Validators.maxLength(4)
      ]),
      e_mail : new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      dateexp : new FormControl('', [
        Validators.required
      ]),
    };
    this.addAcheteurForm = this.fb.group(formControls);

    const formControlsCode = {
    code : new FormControl('', [
      Validators.required
      // Validators.minLength(7),
      // Validators.maxLength(7)
    ]),
   };
    this.confirmForm = this.fb.group(formControlsCode);
  }
   get nom(){
    return this.addAcheteurForm.get('nom');
  }
  get prenom(){
    return this.addAcheteurForm.get('prenom');
  }
  get numcarte(){
    return this.addAcheteurForm.get('numcarte');
  }
  get cvc2(){
    return this.addAcheteurForm.get('cvc2');
  }
  get e_mail(){
    return this.addAcheteurForm.get('e_mail');
  }
  get dateexp(){
    return this.addAcheteurForm.get('dateexp');
  }

  get code(){
    return this.addAcheteurForm.get('code');
  }

  billet: any;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.billet = this.service.getBillet(id).subscribe(data => {
      this.billet = data;

    });
  }


  // tslint:disable-next-line:typedef
  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    const data = this.addAcheteurForm.value;

    this.r = Math.random().toString(36).substring(7);

    const body = {
         mail_acheteur : data.e_mail,
         corps_mail : 'Cher client  ' + data.nom + '  ' + data.prenom + '  Voici votre code de confirmation de transaction :   ' + this.r
         };
    this.acheteurService.addTransaction(body).subscribe(

          );
  }

  // tslint:disable-next-line:typedef
  addAcheteur(){
    const data = this.addAcheteurForm.value;


    if (this.r === this.confirmForm.value.code){
     this.acheteurService.addAcheteur(data).subscribe(
         res => {
           console.log(res);
           this.modalService.dismissAll();
           this.toastr.success('Paiement effectué avec succès');
           this.router.navigate(['/billets']);
         },
         err => {
          this.toastr.error('Code incorrect');
          console.log(err);
       }
     );

    }
  }
}
